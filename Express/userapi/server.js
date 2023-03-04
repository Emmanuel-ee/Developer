var express = require("express");
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var user = require("./user")
app.use("/user", user)

app.listen(3000, () => console.log("server has started"));
