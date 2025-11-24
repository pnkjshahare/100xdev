var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const userData = await userModel.create({
    username: "pankaj",
    name: "shahare",
    age: 23,
  });
  res.send(userData);
});

module.exports = router;
