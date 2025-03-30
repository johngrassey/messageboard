const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("This is a new message!"));

module.exports = newRouter;
