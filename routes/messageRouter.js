const { Router } = require("express");
const indexRouter = require("./indexRouter");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:messageId", messageController.getMessageById);

messageRouter.get("/", (req, res) => res.render("message"));

module.exports = messageRouter;
