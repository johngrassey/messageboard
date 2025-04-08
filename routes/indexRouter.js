const { Router } = require("express");
const crypto = require("crypto");
const messageController = require("../controllers/messageController");

const messages = [
  {
    text: "I'm looking forward to making something today!",
    user: "John",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Can't wait to see how it comes out!",
    user: "Dave",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "YESSS! Finally!",
    user: "Brielle",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

const indexRouter = Router();

indexRouter.get("/", messageController.getAllMessages);
indexRouter.post("/new", messageController.addMessage);

module.exports = indexRouter;
module.exports.messages = messages;
