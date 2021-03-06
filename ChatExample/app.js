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

var config = require('./config/config');

var database_loader = require('./database/database_loader');
var route_loader = require('./routes/route_loader');

//암호화 모듈
var crypto = require('crypto');

//===== socet.io 사용 =====
var socketio = require('socket.io');
var cors = require('cors');

//===== passport 사용 =====//
var passport = require('passport');
var flash = require('connect-flash');

var app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');

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


//===== cors 초기화 =====
app.use(cors());

//===== Passport 초기화 =====//
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var configPassport = require('./config/passport');
configPassport(app, passport);


var router = express.Router();
route_loader.init(app, router);

var userPassport = require('./routes/user_passport');
userPassport(router, passport);




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


//===== socket.io 서버 시작 =====
var io = socketio.listen(server);
console.log('socket.io 요청을 받아들일 준비가 되었습니다.');

io.sockets.on('connecttion', function(socket){
    console.log('connection info -> ' + socket.request.connection._peername);

    socket.remoteAddress = socket.request.connection._peername.address;
    socket.remotePort = socket.request.connection._peername.port;
});