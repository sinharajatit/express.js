var express = require("express");
 var app = express();
//var path = require("path");

// views: the directory where the template files are located
app.set('views', process.argv[3]);

//view engine: the template engine to use. For example, to use the jade template engine
app.set('view engine', 'jade');

//middle-ware 

app.get('/home', function(req, res){
    
    
    res.render('index', {date: new Date().toDateString()});

});

app.listen(process.argv[2]);




