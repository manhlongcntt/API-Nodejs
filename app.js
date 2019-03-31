var express     = require('express');
var app         = express();
var mysql       = require('mysql');
var database    = require("./database");
var bodyParser = require('body-parser');
var urlendcodeParser = bodyParser.urlencoded({extended:false});

app.get('/',function(req,res){
    res.send('xin chào');
});

app.get('/getAllsinhvien', function(req,res){
    database.getAllsinhvien(function(result){
        res.json(result);
    });
});

 app.post('/insertsinhvien',urlendcodeParser,function(req,res){  
    var name  = req.body.name;
    var idClass = req.body.idClass;
    var diem  = req.body.diem;
    var email = req.body.email;
    database.addsinhvien(name,idClass,diem,email,function(result){

        console.log("database: "+result);
        if (result == "[object Object]") {
            res.send("Succecss");   
        } else {
            res.send("error");
        }

    });
    console.log(idClass);
    console.log(req.body.email);
    console.log(req.body);     
});

app.post('/updatesinhvien',urlendcodeParser,function(req,res){
    var name    = req.body.name;
    var idCalss = req.body.idCalss;
    var diem    = req.body.diem;
    var email   = req.body.email;
    var id      = req.body.id;
    database.updatesinhvien(id,name,idCalss,diem,email,function(result){
        console.log("database: "+result);
        if (result == "[object Object]") {
            res.send("Succecss");   
        } else {
            res.send("error");
        }
    });
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body);     
});

app.post('/detelesinhvien',urlendcodeParser,function(req,res){
    var id = req.body.id;
    database.deleteinhvien(id,function(result){
        console.log(result);
        if (result == "[object Object]") {
            res.send("Succecss");   
        }  else {
            res.send("error");
        }
    });
    console.log(id);
});

app.listen(8000);