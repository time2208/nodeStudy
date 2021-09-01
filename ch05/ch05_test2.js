var http = require('http');
var server = http.createServer();

var host = 'localhost';
var port = 3000;

server.listen(port, host, 5000, function(){
    console.log('웹서버 실행됨');
});

server.on('connect', function(socket){
    console.log('크라이언트가 접속했습니다.');
});

server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    //console.dir(req);

    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.write('<h1>웹서버로부터 받은 응답</h1>');
    res.end();
});