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
// indexRouter.get("/", (req, res) =>
//   res.render("index", { title: "Mini Messageboard", messages: messages })
// );

module.exports = {
  getAllMessages,
  addMessage,
};
