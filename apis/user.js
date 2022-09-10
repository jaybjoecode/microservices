const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, resp) => {
  return resp.send("USER SERVER!");
});

app.listen(port, () => {
  console.log(`SERVER::USER http://localhost:${port}`);
});