const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(text, user) {
  const query =
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, NOW())";
  await pool.query(query, [text, user]);
}

async function getMessageById(messageId) {
  const query = "SELECT * FROM messages WHERE id = $1";
  const { rows } = await pool.query(query, [messageId]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessageById,
};
