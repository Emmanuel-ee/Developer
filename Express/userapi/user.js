var express = require("express");
var router = express.Router();
const userdata = [];
router.get("/", (request, response) => {
  return response.json(userdata);
});

router.post("/", (request, response) => {
  let user = request.body;
  userdata.push(user);
  return response.json({ success: true });
});

router.get("/id", (request, response) => {
  let data = {};
  for (let i = 0; i < userdata.length; i++) {
    if (userdata[i].id == request.query.id) {
      data = userdata[i];
      break;
    }
  }
  console.log(data)
  return response.json(data);
});
module.exports = router