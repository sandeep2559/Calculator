const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){

    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);

    var result=n1+n2;

    res.send("The result of the calculation is : "+ result);
});

app.listen(5000, function(){
    console.log("Server 5000 is get started");

});