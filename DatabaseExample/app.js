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

//mongodb 모듈 사용
var MongoClient = require('mongodb').MongoClient;

var database;

function connectDB(){
    var databaseUrl = 'mongodb://localhost:27017/local';

    MongoClient.connect(databaseUrl, function(err, db){
        if(err){
            console.log('데이터 베이스 연결시 에러 발생하');
            return;
        }

        console.log('데이터베이스에 연결됨: ' + databaseUrl);
        database = db;
    });
}

var app = express();

app.set('port', process.env.PORT || 3000);

app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));



var router = express.Router();

router.route('/process/product').get(function(req, res){
    console.log('/process/product 라우팅 함수에서 받음.');

    if(req.session.user){
        res.redirect('/public/product.html');
    }else {
        res.redirect('/public/login2.html');
    }
});

router.route('/process/login').post(function(req, res){
    console.log('/process/login 라우팅 함수에서 받음.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword);

    if (req.session.user) {
        console.log('이미 로그인됨');
        res.redirect('/public/product.html');
    } else {
        req.session.user = {
            id: paramId,
            name: '찬',
            authorized:true
        };
        res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
        res.write('<h1>로그인 성공</h1>');
        res.write('<p>id: ' + paramId +'</p>');
        res.write('<br><br><a href="/public/product.html">상품 페이지로 이동</a>');
        res.end();
    }
});

router.route('/process/logout').get(function (req, res) {
    console.log('/process/logout 라우팅 함수에서 받음.');

    if (req.session.user) {
        console.log('로그아웃 합니다.');
        req.session.destroy(function(err){
            if(err){
                console.log('세션 삭제 시 에러 발생');
                return;
            }

            console.log('세션 삭제 성공');
            res.redirect('/public/login2.html');
        });
    } else {
        console.log('로그인 되어 있지 않습니다.');
        res.redirect('/public/login2.html');
    }
});

router.route('/process/setUserCookie').get(function(req, res){
    console.log('/process/setUserCookie 라우팅 함수에서 받음.');

    res.cookie('user', {
        id: 'chan',
        name: '찬',
        authorized:true
    });

    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res){
    console.log('/process/showCookie 라우팅 함수에서 받음.');

    res.send(req.cookies);
});


app.use('/', router);

var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스로 웹 서버를 실행함 :' + app.get('port'));

    connectDB();
});