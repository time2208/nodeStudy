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
//var MongoClient = require('mongodb').MongoClient;

//mongoose 모듈 사용
var mongoose = require('mongoose');

var database;
var UserSchema;
var UserModel;

function connectDB(){
    var databaseUrl = 'mongodb://localhost:27017/local';

    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;

    database.on('open', function(){
        console.log('데이터베이스에 연결됨 : ' + databaseUrl);

        UserSchema = mongoose.Schema({
            id: {type:String, required:true, unique:true},
            name: { type: String, index:'hashed'},
            password: { type: String, required: true},
            age: {type:Number, 'default':-1},
            created_at: { type: Date, index: { unique: false }, 'default': Date.now()},
            updated_at: { type: Date, index: { unique: false }, 'default': Date.now()}
        });

        console.log('UserSchema 정의함. ');

        UserSchema.static('findById', function(id, callback){
            return this.find({id:id}, callback);
        });

        /*
        위와 동일한 기능
        UserSchema.statics.findById = function (id, callback){
            return this.find({ id: id }, callback);
        };
         */

        UserSchema.static('findAll', function (callback) {
            return this.find({}, callback);
        });

        UserModel = mongoose.model('users2', UserSchema);
        console.log('UserModel 정의함.');

    });

    database.on('disconnected', function(){
        console.log('데이터베이스 연결 끊어짐.');
    });

    database.on('error', console.error.bind(console, 'mongoose 연결 에러.'));
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

router.route('/process/login').post(function (req, res) {
    console.log('/process/login 라우팅 함수 호출됨.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword);


    if(database){
        authorized(database, paramId, paramPassword, function(err, docs){
            if(err){
                console.log('에러 발생.');
                res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

            if(docs){
                console.dir(docs);
                res.writeHead(400, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 로그인 성공</h1>');
                res.write('<dir><p>사용자: '+ docs[0].name +'</p></dir>');
                res.write('<br><br><a href="/public/login.html" >다시 로그인</a>');
                res.end();
            }else {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 데이터 조회 안됨.</h1>');
                res.end();
            }
        });
    }else {
        console.log('에러 발생.');
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
        res.write('<h1>데이터 연결 안됨.</h1>');
        res.end();
    }
});

router.route('/process/adduser').post(function(req, res){
    console.log('/process/adduser 라우팅 함수 호출됨.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;
    var paramName = req.body.name;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword + ', ' + paramName);

    if(database) {
        addUser(database, paramId, paramPassword, paramName, function(err, result){
            if (err) {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

            if(result) {
                console.dir(result);

                res.writeHead(400, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 추가 성공</h1>');
                res.write('<dir><p>사용자: ' + paramName +'</p></dir>');
                res.end();
            }else {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 추가 안됨.</h1>');
                res.end();
            }
        });
    } else {
        console.log('에러 발생.');
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
        res.write('<h1>데이터 연결 안됨.</h1>');
        res.end();
    }
});

router.route('/process/listuser').post(function(req, res){
    console.log('/process/listuser 라우팅 함수 호출됨.');

    if(database){
        UserModel.findAll(function(err, results){
            if (err) {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

            if (results){
                console.dir(results);
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h3>사용자 리스트</h3>');
                res.write('<dir><ul>');

                for(var i=0; i<results.length; i++){
                    var curId = results[i]._doc.id;
                    var curName = results[i]._doc.name;

                    res.write('<li>#' + i + '->' + curId + ', ' + curName+'</li>');
                }
                res.write('</ul></dir>');
                res.end();
            } else {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>조회된 사용자 없음</h1>');
                res.end();
            }
        });
    } else {
        console.log('에러 발생.');
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
        res.write('<h1>데이터 연결 안됨.</h1>');
        res.end();
    }

});


app.use('/', router);

var authUser = function(db, id, password, callback){
    console.log('authUser 호출됨.' + id + ',' + password );

    UserSchema.findById(id, function(err, results){
        if(err){
            callback(err, null);
            return;
        }

        console.log('아이디 %s로 검색됨.');
        if(results.length >0){
            if(results[0]._doc.password === password){
                console.log('비밀전호 일치함.');
                callback(null, results);
            }else {
                console.log('비밀번호 일치하지 않음.');
                callback(null, null);
            }
        }else {
            console.log('비밀번호 일치하지 사용자 없음.');
            callback(null, null);
        }


    });

    UserModel.find({ "id": id, "password": password }, function (err, docs){
        if (err) {
            callback(err, null);
            return;
        }

        if (docs.length > 0) {
            console.log('일치하는 사용자를 찾음');
            callback(null, docs);
        } else {
            console.log('일치하는 사용자를 찾지 못함');
            callback(null, null);
        }

    });
};

//사용자 추가 함수
var addUser = function(db, id, password, name, callback){
    console.log('addUser 호출됨.' + id + ',' + password + ', ' + name);

    var user = new UserModel({ "id": id, "password": password, "name": name});

    user.save(function(err) {
        if(err) {
            callback(err, null);
            return;
        }

        console.log ('사용자 데이터 추가함');
        callback(null, user);
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

    connectDB();
});