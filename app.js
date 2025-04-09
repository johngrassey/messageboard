const express = require("express");
const app = express();
console.log("Application startup beginning...");
console.log("Environment:", process.env.NODE_ENV);
app.use(express.urlencoded({ extended: true }));
const path = require("node:path");
require("dotenv").config();
console.log("Environment variables loaded");
console.log("PORT:", process.env.PORT);
console.log("Database URL exists:", !!process.env.DATABASE_URL);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

console.log("Loading routes...");
try {
  const indexRouter = require("./routes/indexRouter");
  const newRouter = require("./routes/newRouter");
  const messageRouter = require("./routes/messageRouter");
  console.log("Routes loaded successfully");

  app.get("/health", (req, res) => {
    console.log("Health check endpoint accessed");
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
console.log(`Attempting to listen on port ${PORT}...`);

try {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express app is listening on port ${PORT}!`);
  });
} catch (error) {
  console.error("Failed to start server:", error);
}
