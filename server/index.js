const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ Hi: `There` });
  res.end;
});

const PORT = proces.evn.PORT || 5000;
app.listen(PORT);
