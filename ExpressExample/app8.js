var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

//post 방식으로 보내기 위한 모듈
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/process/login').post(function(req, res){
    console.log('/process/login 라우팅 함수에서 받음.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;

    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write("<dir><p>" + paramId +"</p></dir>");
    res.write("<dir><p>" + paramPassword +"</p></dir>");
    res.end();
});

app.use('/', router);

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스로 웹 서버를 실행함 :' + app.get('port'));
});