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

//mysql 모듈 사용
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user:'root',
    password:'1234',
    database: 'chantest',
    debug:false
});

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

router.route('/process/adduser').post(function(req, res){
    console.log('/process/adduser 라우팅 함수에서 호출됨.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;
    var paramName = req.body.name;
    var paramAge = req.body.age;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword + ', ' + paramName + ', ' + paramAge);

    //자료형 변환 
    var age = Number(paramAge);
    addUser(paramId, paramName, age, paramPassword, function(err, addedUser){
        if (err) {
            console.log('에러 발생.');
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write('<h1>에러 발생</h1>');
            res.end();
            return;
        }

        if(addedUser) {
            console.dir(addedUser);

            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write('<h1>사용자 추가 성공</h1>');
            res.end();
        }else{
            console.log('에러 발생.');
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write('<h1>사용자 추가 실패</h1>');
            res.end();
        }

    });
});

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

router.route('/process/login').post(function (req, res) {
    console.log('/process/login 라우팅 함수 호출됨.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword);

    authUser(paramId, paramPassword, function(err, rows){
            if(err){
                console.log('에러 발생.');
                res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

        if (rows){
            console.dir(rows);
                res.writeHead(400, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 로그인 성공</h1>');
            res.write('<dir><p>사용자: ' + rows[0].name +'</p></dir>');
                res.write('<br><br><a href="/public/login.html" >다시 로그인</a>');
                res.end();
            }else {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 데이터 조회 안됨.</h1>');
                res.end();
            }
        });
    
});


app.use('/', router);
var addUser = function(id, name, age, password, callback){
    console.log('addUser 호출됨');

    pool.getConnection(function(err, conn){
        if(err){
            if (conn) {
                conn.release();
            }
            callback(err, null);
            return;
        }

        console.log('데이터베이스 연결의 스레드 아이디: ' + conn.thradId);

        var data = {id:id, name:name, age:age, password:password};
        var exec = conn.query('insert into users set ?', data, function(err, result){
            conn.release();
            console.log('실행된 SQL: '+ exec.sql);

            if(err){
                console.log('SQL 실행 시 에러 발생.');
                callback(err, null);
                return;
            }

            callback(null, result);
        });
    });
};

var authUser = function(id, password, callback){
    console.log('authUser 호출됨.' + id + ',' + password );

    pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }

        console.log('데이터베이스 연결 스레드 아이디 :' + conn.threadId);

        var tablename = 'users';
        var conlumns = ['id', 'name', 'age'];

        var exec = conn.query("SELECT ?? FROM ?? WHERE id = ? AND password = ?", [conlumns, tablename, id, password], function(err, rows){
            conn.release();
            console.log('실행된 SQL : '+ exec.sql);

            if(err){
                callback(err, null);
                return;
            }

            if(rows.length > 0){
                console.log('사용자 찾음');
                callback(null, rows);
            }else{
                console.log('사용자 찾지 못함');
                callback(null, null);
            }
        });
    });
};

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
});