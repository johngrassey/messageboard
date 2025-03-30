const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) =>
  res.render("message", { messageId: req.params.messageId })
);
messageRouter.get("/", (req, res) => res.render("message"));

module.exports = messageRouter;
