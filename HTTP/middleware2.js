const express = require("express")
const app = express()
let noOfRequest = 0;
//middle ware
function calculateRequest(req, res, next) {
    noOfRequest++;
    console.log(noOfRequest);
    next();
}
app.get("/",calculateRequest,function(req,res){

})
app.listen(3000,function(){
    console.log("server is running");
    
});
//average time of server to handle request