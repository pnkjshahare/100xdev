// const express=require('express')
const mongoose = require("mongoose");
// const app=express()
mongoose.connect(
  "mongodb+srv://admin:admin%40123@cluster0.qc29a.mongodb.net/app"
);
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
const user = new User({
  name: "pankaj",
  email: "pankaj@gmail.com",
  password: "1234",
});

user.save();

//mongodb+srv://admin:admin%40123@cluster0.qc29a.mongodb.net/
