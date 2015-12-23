var http = require('http');
var fileSystem = require('fs');

http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});

var read_stream = fileSystem.createReadStream('myfile.txt');
read_stream.on('data', function(data){
writeCallback(data, response);
});
read_stream.on('close', function(){
closeCallback(response);
});
}).listen(8080);

var writeCallback = function (data, response){
response.write(data);
}

var closeCallback = function (response){
response.end();
}
console.log('Server started');

