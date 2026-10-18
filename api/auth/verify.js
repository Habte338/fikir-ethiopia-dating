const { neon } = require("@neondatabase/serverless");
const crypto = require("crypto");

const sql = neon(process.env.DATABASE_URL);
const MAX_ATTEMPTS = 5;

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function readCookie(req, name) {
  const header = req.headers.cookie || "";
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return rest.join("=");
  }
  return null;
}

// Session cookie: user ID + expiry, signed with SESSION_SECRET
function signSession(userId) {
  const exp = Date.now() + 30 * 24 * 60 * 60 * 1000;
  const payload = `${userId}.${exp}`;
  const sig = crypto
    .createHmac("sha256", process.env.SESSION_SECRET)
    .update(payload)
    .digest("base64url");
  return `${payload}.${sig}`;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).end();

  const code = String((req.body && req.body.code) || "").trim();
  const linkToken = readCookie(req, "fikir_link");
  if (!/^\d{6}$/.test(code) || !linkToken) {
    return res.status(400).json({ ok: false, error: "invalid_request" });
  }

  try {
    // Which Telegram account did this browser's link get bound to?
    const links = await sql`
      SELECT telegram_user_id FROM auth_tokens
      WHERE token_hash = ${sha256(linkToken)}
        AND purpose = 'telegram_link'
        AND telegram_user_id IS NOT NULL
      LIMIT 1`;
    if (links.length === 0) {
      return res.status(400).json({ ok: false, error: "invalid_request" });
    }
    const tgId = links[0].telegram_user_id;

    // Latest unused, unexpired login code for that Telegram account
    const rows = await sql`
      SELECT id, user_id, code_hash, attempts FROM auth_tokens
      WHERE telegram_user_id = ${tgId}
        AND purpose = 'login_code'
        AND used_at IS NULL
        AND expires_at > now()
      ORDER BY created_at DESC
      LIMIT 1`;
    if (rows.length === 0) {
      return res.status(400).json({ ok: false, error: "code_expired" });
    }
    const row = rows[0];

    if (row.attempts >= MAX_ATTEMPTS) {
      return res.status(429).json({ ok: false, error: "too_many_attempts" });
    }

    const given = Buffer.from(sha256(code));
    const stored = Buffer.from(row.code_hash);
    const match = crypto.timingSafeEqual(given, stored);

    if (!match) {
      await sql`UPDATE auth_tokens SET attempts = attempts + 1 WHERE id = ${row.id}`;
      return res.status(400).json({ ok: false, error: "wrong_code" });
    }

    // Use the code up so it can't be reused
    await sql`UPDATE auth_tokens SET used_at = now() WHERE id = ${row.id}`;

    res.setHeader("Set-Cookie", [
      `fikir_session=${signSession(row.user_id)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=2592000`,
      "fikir_link=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0",
    ]);
    return res.status(200).json({ ok: true });
  } catch (err) {
    // No codes or phone numbers in logs
    console.error("Verify error");
    return res.status(500).json({ ok: false, error: "server" });
  }
};