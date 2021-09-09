var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

//post 방식으로 보내기 위한 모듈
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

//에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

//user 모듈 불러오기
var user = require('./routes/user');

var config = require('./config');

var database_loader = require('./database/database_loader');
var route_loader = require('./routes/route_loader');

//암호화 모듈
var crypto = require('crypto');

var app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

console.log('config.server_port -> ' + config.servrt_port);
app.set('port', config.servrt_port || 3000);

app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));


route_loader.init(app, express.Router());


//404에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스로 웹 서버를 실행함 :' + app.get('port'));
    
    database_loader.init(app, config);
});