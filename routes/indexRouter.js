const { Router } = require("express");
const crypto = require("crypto");
const messageController = require("../controllers/messageController");

const indexRouter = Router();

indexRouter.get("/", messageController.getAllMessages);
indexRouter.post("/new", messageController.addMessage);

module.exports = indexRouter;
