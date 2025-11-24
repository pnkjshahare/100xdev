const express = require('express')
const app = express()
// app.use();

app.get('/', function (req, res) {
    console.log("hello pankaj");
    res.send("hii from response")

})

app.listen(3000);