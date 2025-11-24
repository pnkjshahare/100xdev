const express=require('express')
const app=express()

app.get('/',function(req,res){
    const p=req.query.p;
    res.send(p)
})

app.listen(3000,function(){
    console.log("server is running")
})


//mongodb+srv://admin:admin%40123@cluster0.qc29a.mongodb.net/