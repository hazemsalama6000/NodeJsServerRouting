var http = require('http');

var app = require('./server');

var server = http.createServer(app);

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening Now ......');
});