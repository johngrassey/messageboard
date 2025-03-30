const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
