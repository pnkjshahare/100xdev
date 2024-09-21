const express = require('express');
const port = 3000
const app = express();

app.get('/route-handler',function(req,res){
    res.send('hello from route-handler')
})
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(port,function(){
    console.log("listening on port 3000");
    
});


// server using -c++ 
//rust actix-web
//gurrila framework-golang