var express = require("express");
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get("/", (request, response) => {
  return response.send("Hello from " + request.query.name);
});

app.post("/", (request, response) => {
    return response.send("Hello from post" + request.body.name);
  });
  

app.listen(3000, () => console.log("server has started"));
