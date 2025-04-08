const db = require("../db/queries");

async function getAllMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function addMessage(req, res) {
  try {
    const { text, user } = req.body;
    await db.addMessage(text, user);
    res.redirect("/");
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getMessageById(req, res) {
  try {
    const messageId = req.params.messageId;
    const message = await db.getMessageById(messageId);
    if (!message) {
      return res.status(404).render("404");
    }
    res.render("message", { message: message });
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessageById,
};
