var express = require('express');
var http = require('http');

var app = express();

//환경변수에 포트가 지정되었으면서 사용하고 아니면 3000로 설정한다.
app.set('port', process.env.PORT || 3000);

//use 메소드를 이용해 미들웨어르 등록함
app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨.');

    req.user = 'mike';

    next();
});

app.use(function(req, res, next){
    console.log('두번째 미들웨어 호출됨.');

    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
    res.end('<h1>서버에서 응답한 결과입니다.'+ req.user +'</h1>');
});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 :' + app.get('port'));
});