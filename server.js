const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get("/average", function(req,res ){
    res.sendFile(__dirname + "/average.html");
});
app.post("/average",function(req,res){
    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);
    var n3=Number(req.body.n3);
    var result=(n1+n2+n3)/3;
       res.send("The ressult of calculation is"+result);
});
app.get("/front",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/:name", (req,res) => {
    res.send(" Hello " + req.params.name );
    console.log(req.params);
});

app.listen(3100, function() {
    console.log("Server is running at 3100 port");
});