const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, resp) => {
  return resp.send("CHAT SERVER!");
});

app.listen(port, () => {
  console.log(`SERVER::CHAT http://localhost:${port}`);
});