const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require("node:path");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express app is listening on port ${PORT}!`);
});
