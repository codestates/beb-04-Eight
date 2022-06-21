const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("run server");
});

app.listen(PORT, () => console.log(`----- 🚀 Server is starting on ${PORT} port...`));
