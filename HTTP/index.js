const express=require("express");
const app=express();
function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
       ans+=i;
    }
    return ans;
}
//req=>request res=>responce
app.get("/",function(req,res){
    const n=req.query.n;
    const ans=sum(n)
    res.send("hiii sum is "+ ans)
})
app.listen(3000);

// server using -c++ 
//rust actix-web
//gurrila framework-golang