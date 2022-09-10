const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, resp) => {
  return resp.send("AUTH SERVER!");
});

app.listen(port, () => {
  console.log(`SERVER::AUTH http://localhost:${port}`);
});