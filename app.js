const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require("node:path");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

try {
  const indexRouter = require("./routes/indexRouter");
  const newRouter = require("./routes/newRouter");
  const messageRouter = require("./routes/messageRouter");

  app.get("/health", (req, res) => {
    res.status(200).send("OK");
  });

  app.use("/", indexRouter);
  app.use("/new", newRouter);
  app.use("/message", messageRouter);
} catch (error) {
  console.error("Error loading routes:", error);
}

app.use((err, req, res, next) => {
  console.error("Application error:", err);
  res.status(500).send("Something went wrong");
});

const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT, "0.0.0.0", () => {});
} catch (error) {
  console.error("Failed to start server:", error);
}
