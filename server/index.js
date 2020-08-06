const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi");
  res.end;
});

const PORT = process.evn.PORT || 5000;
app.listen(PORT);
