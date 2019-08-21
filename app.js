var express=require('express')
const app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html")
})
app.listen(process.env.PORT || 8080,function(){
    console.log("server started")
})