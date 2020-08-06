const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ Hi: "There" });
  res.end;
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT);
