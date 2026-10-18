const { neon } = require("@neondatabase/serverless");
const crypto = require("crypto");

const sql = neon(process.env.DATABASE_URL);

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

async function sendTelegram(chatId, text, extra = {}) {
  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, ...extra }),
  });
}

// Turns "0912345678", "251912345678" or "+251912345678" into "+251912345678"
function normalizePhone(raw) {
  let digits = String(raw).replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("09")) digits = "251" + digits.slice(1);
  const e164 = "+" + digits;
  return /^\+[1-9][0-9]{7,14}$/.test(e164) ? e164 : null;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Only Telegram knows this secret, so it proves the message really came from Telegram
  if (req.headers["x-telegram-bot-api-secret-token"] !== process.env.TG_WEBHOOK_SECRET) {
    return res.status(401).end();
  }

  const msg = req.body && req.body.message;
  if (!msg || !msg.from) return res.status(200).end();

  const chatId = msg.chat.id;
  const fromId = msg.from.id; // Telegram's permanent ID, never taken from the browser

  try {
    // Step A: user opened the website link, which sends "/start <token>"
    if (msg.text && msg.text.startsWith("/start")) {
      const token = msg.text.split(" ")[1];
      if (!token) {
        await sendTelegram(chatId, "Please use the verification link from the Fikir website.");
        return res.status(200).end();
      }

      const rows = await sql`
        UPDATE auth_tokens
        SET telegram_user_id = ${fromId}
        WHERE token_hash = ${sha256(token)}
          AND purpose = 'telegram_link'
          AND used_at IS NULL
          AND expires_at > now()
          AND (telegram_user_id IS NULL OR telegram_user_id = ${fromId})
        RETURNING id`;

      if (rows.length === 0) {
        await sendTelegram(chatId, "❌ This link has expired or is invalid. Go back to the website and try again.");
        return res.status(200).end();
      }

      await sendTelegram(chatId, "📱 Tap the button below to share your phone number.", {
        reply_markup: {
          keyboard: [[{ text: "Share my phone number", request_contact: true }]],
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });
      return res.status(200).end();
    }

    // Step B: user shared their phone number with the button
    if (msg.contact) {
      // Reject forwarded contacts: the number must belong to the person sending it
      if (msg.contact.user_id !== fromId) {
        await sendTelegram(chatId, "Please share your own phone number using the button.");
        return res.status(200).end();
      }

      const phone = normalizePhone(msg.contact.phone_number);
      if (!phone) {
        await sendTelegram(chatId, "That phone number could not be read. Please try again.");
        return res.status(200).end();
      }

      // Check that this Telegram account has a valid, unused link from the website
      const tokens = await sql`
        SELECT id FROM auth_tokens
        WHERE telegram_user_id = ${fromId}
          AND purpose = 'telegram_link'
          AND used_at IS NULL
          AND expires_at > now()
        LIMIT 1`;

      if (tokens.length === 0) {
        await sendTelegram(chatId, "❌ Your link has expired. Go back to the website and try again.");
        return res.status(200).end();
      }

      // Create or update the user for this Telegram account
      const [user] = await sql`
        INSERT INTO users (telegram_user_id, phone_e164)
        VALUES (${fromId}, ${phone})
        ON CONFLICT (telegram_user_id)
        DO UPDATE SET phone_e164 = EXCLUDED.phone_e164, updated_at = now()
        RETURNING id`;

      // Link this Telegram account to the user (ignored if already linked)
      await sql`
        INSERT INTO telegram_links (user_id, telegram_user_id, telegram_username)
        VALUES (${user.id}, ${fromId}, ${msg.from.username || null})
        ON CONFLICT DO NOTHING`;

      // Create a 6-digit code that expires in 5 minutes. Only its hash is stored.
      const code = String(crypto.randomInt(100000, 1000000));
      await sql`
        INSERT INTO auth_tokens (purpose, code_hash, user_id, telegram_user_id, phone_e164, expires_at)
        VALUES ('login_code', ${sha256(code)}, ${user.id}, ${fromId}, ${phone}, now() + interval '5 minutes')`;

      // The link is used up now, so it can't be reused
      await sql`
        UPDATE auth_tokens SET used_at = now()
        WHERE telegram_user_id = ${fromId} AND purpose = 'telegram_link' AND used_at IS NULL`;

      await sendTelegram(
        chatId,
        `✅ Number verified!\n\nYour verification code is: ${code}\nIt expires in 5 minutes.\nEnter it on the website.\n\nየማረጋገጫ ኮድ: ${code}\n(በ5 ደቂቃ ውስጥ ያስገቡ)`,
        { reply_markup: { remove_keyboard: true } }
      );
      return res.status(200).end();
    }

    return res.status(200).end();
  } catch (err) {
    // Log only a general message, so no phone numbers or codes end up in logs
    console.error("Telegram webhook error");
    try {
      await sendTelegram(chatId, "Something went wrong. Please try again in a few minutes.");
    } catch (_) {}
    return res.status(200).end();
  }
};