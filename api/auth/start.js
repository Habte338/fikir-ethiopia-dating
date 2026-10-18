const { neon } = require("@neondatabase/serverless");
const crypto = require("crypto");

const sql = neon(process.env.DATABASE_URL);
const BOT = "ETCustomerhand_bot";

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Random one-time token. Only its hash goes into the database.
  const token = crypto.randomBytes(32).toString("base64url");

  await sql`
    INSERT INTO auth_tokens (purpose, token_hash, expires_at)
    VALUES ('telegram_link', ${sha256(token)}, now() + interval '10 minutes')`;

  // Tie the link to this browser so someone else can't finish the login
  res.setHeader(
    "Set-Cookie",
    `fikir_link=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`
  );
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({ link: `https://t.me/${BOT}?start=${token}` });
};