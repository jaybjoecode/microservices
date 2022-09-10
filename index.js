const express = require("express");
const { ROUTES, setupProxies } = require("./config.routes");
const app = express();
const port = 3000;

// ### GATEWAY ###
app.get("/", (req, resp) => {
  return resp.send("GATEWAY SERVER!");
});

setupProxies(app, ROUTES);

app.listen(port, () => {
  console.log(`Gateway http://localhost:${port}`);
});
