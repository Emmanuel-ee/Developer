var express = require("express");
var app = express();
app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.listen(3000, () => console.log("server has started"));
