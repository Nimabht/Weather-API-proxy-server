const express = require("express");
const { join } = require("path");
const app = express();

app.set("views", "./views");
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  const filePath = join(__dirname, "views", "index.html");
  res.sendFile(filePath);
});

app.listen(4000, () => {
  console.log("Main server started on port 4000");
});
