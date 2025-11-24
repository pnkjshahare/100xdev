const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.qc29a.mongodb.net/");
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);

// mongod --dbpath "" --logpath "" --install --serviceName "MongoDB"

//mongodb+srv://admin:admin%40123@cluster0.qc29a.mongodb.net/
