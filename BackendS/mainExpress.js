const express = require("express");
const app = express();
// app.set("view engine", "ejs");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.use(function (req, res, next) {
  console.log("hello from use");
  next();
});

// app.get("/profile", function (req, res) {
//   res.send("profile is running");
// });

// app.get("/profile/:username/:password", function (req, res) {
//   res.send(
//     `HELLO FROM ${req.params.username.toUpperCase()} AND ${req.params.password.toUpperCase()}`
//   );
// });

app.get("/profile", function (req, res) {
  res.render("index");
});

app.listen(3001, () => {
  console.log("console running");
});
