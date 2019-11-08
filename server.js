const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static(__dirname));

//routers
app.get('/', function(req, res){
    res.send("index.html");
});

app.get('/about', function(req, res){
    res.send("about.html");
});

app.get('/contact', function(req, res){
    res.send("contact.html");
});

app.get('/Links'), function(req, res){
    res.send("Links.html");
};


app.listen(port, ()=> {
    console.log('app running');
});
