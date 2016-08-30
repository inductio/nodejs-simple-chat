var http = require('http');
var fs = require('fs');
var chat = require('./chat');
http.createServer(function (req, res) {

    switch(req.url) {
        case "/":
            sendFile("index.html", res);
            break;
        case "/subscribe":
            chat.subscribe(req, res);
            //---
            break;
        case "/publish":
            chat.publish(".....");
            //***
            break;
        default:
            res.statusCode = 404;
            res.end("Not Found");
    }

}).listen(80, "127.0.0.1");

function sendFile(fileName, res)  {
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function(){
            res.statusCode = 500;
            res.end("server error");
        });
}