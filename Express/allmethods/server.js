var express = require("express");
var app = express();

app.get("/", (request, response) => {
  return response.send("Hello World from get");
});

app.get("/welcome", (request, response) => {
    return response.send("welcome from the world of express");
  });

app.put("/", (request, response) => {
  return response.send("Hello World from put");
});

app.post("/", (request, response) => {
  return response.send("Hello World from post");
});

app.delete("/", (request, response) => {
  return response.send("Hello World from delete");
});


app.listen(3000, () => console.log("server has started"));
