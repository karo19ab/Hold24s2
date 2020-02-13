var http = require('http');

/*var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('login')
})


 */



var ownModules = require('./module');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Rasmus, i dag er det ' + ownModules.date() + ". Forstaar I, gutterne?! Eller hvad?");
}).listen(8080);

console.log("f u rasmus");





