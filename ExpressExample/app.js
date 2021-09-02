var express = require('express');
var http = require('http');

var app = express();

//환경변수에 포트가 지정되었으면서 사용하고 아니면 3000로 설정한다.
app.set('port', process.env.PORT || 3000);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 :' + app.get('port'));
});