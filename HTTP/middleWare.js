const express = require('express')
const app = express()
app.use(express.json())
/*function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "pankaj" || password != "pass") {
        res.status(400).json({
            msg: "user not exit",
        })
    }
    else {
        next();
    }
}
let count=0;
function countNo(req, res, next) {
    count++;
    console.log(count);
    next();
}
app.use(countNo)
// app.get("/health", userMiddleware, function (req, res) {
//     res.json("user exit");
// })
*/
app.post("/health-checkup",function(req,res){
 const kidney=req.body.kidney;
 const kidneyLength=kidney.length;
 res.send("kidneys length "+kidneyLength);
})


//global catches
app.use(function(err,req,res,next){
    res.json({
      msg:"server is down"  
    })
})

app.listen(3000, function () {
    console.log("server run successfully")
});