const { Router } = require("express");

const messages = [
  {
    text: "I'm looking forward to making something today!",
    user: "John",
    added: new Date(),
  },
  {
    text: "Can't wait to see how it comes out!",
    user: "Dave",
    added: new Date(),
  },
  {
    text: "YESSS! Finally!",
    user: "Brielle",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

module.exports = indexRouter;
