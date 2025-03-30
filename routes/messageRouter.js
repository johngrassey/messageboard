const { Router } = require("express");
const indexRouter = require("./indexRouter");

const messageRouter = Router();
const messages = indexRouter.messages;

messageRouter.get("/:messageId", (req, res) => {
  const message = messages.find(
    (message) => message.id === req.params.messageId
  );
  if (!message) {
    return res.status(404).render("404");
  }
  res.render("message", { message: message });
});

messageRouter.get("/", (req, res) => res.render("message"));

module.exports = messageRouter;
