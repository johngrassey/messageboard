const { Router } = require("express");
const crypto = require("crypto");

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

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
    id: crypto.randomUUID(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
module.exports.messages = messages;
