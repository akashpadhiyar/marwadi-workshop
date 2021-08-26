var http = require('http');
http.createServer(function(req,res){

    res.end("Welcome to node js 5");
}).listen(8000);
console.log("Server Started on Port No 8000");