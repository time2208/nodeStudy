

var login = function (req, res) {
    console.log('/process/login 라우팅 함수에서 받음.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword);

    var database = req.app.get('database');
    if(database){
        authuser(database, paramId, paramPassword, function(err, docs){
            if(err){
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

            if(docs){
                console.dir(docs);
                
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });

                var context = {
                    userid: paramId,
                    username: docs[0].name
                };
                req.app.render('login_success', context, function(err, html){
                    if(err){
                        console.log('뷰 렌더링 중 에러 발생 : ' + err.stack);

                        console.log('에러 발생.');
                        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                        res.write('<h1>뷰 렌더링 중 에러 발생</h1>');
                        res.write('<br><p>' + err.stack +'</p>');
                        res.end();
                        return;
                    }

                    res.end(html);
                });


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
        res.write('<h1>데이터베이스 연결 안됨.</h1>');
        res.end();
    }
    
};

var adduser = function (req, res) {
    console.log('/process/adduser 라우팅 함수 호출됨.');

    var paramId = req.body.id;
    var paramPassword = req.body.password;
    var paramName = req.body.name;

    console.log('요청 파라미터: ' + paramId + ', ' + paramPassword + ', ' + paramName);

    var database = req.app.get('database');
    if (database) {
        addUser(database, paramId, paramPassword, paramName, function (err, result) {
            if (err) {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

            if (result) {
                console.dir(result);

                res.writeHead(400, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 추가 성공</h1>');
                res.write('<dir><p>사용자: ' + paramName + '</p></dir>');
                res.end();
            } else {
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
};

var listuser = function (req, res) {
    console.log('/process/listuser 라우팅 함수 호출됨.');

    var database = req.app.get('database');
    if (database) {
        database.UserModel.findAll(function (err, results) {
            if (err) {
                console.log('에러 발생.');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>에러 발생</h1>');
                res.end();
                return;
            }

            if (results) {
                console.dir(results);

                var context = {
                    results: results
                };
                req.app.render('listuser', context, function (err, html) {
                    if (err) {
                        console.log('뷰 렌더링 중 에러 발생 : ' + err.stack);

                        console.log('에러 발생.');
                        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                        res.write('<h1>뷰 렌더링 중 에러 발생</h1>');
                        res.write('<br><p>' + err.stack + '</p>');
                        res.end();
                        return;
                    }
                    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                    res.end(html);
                });
                
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

};

var authuser = function (db, id, password, callback) {
    console.log('authUser 호출됨.' + id + ',' + password);

    db.UserModel.findById(id, function (err, results) {
        if (err) {
            callback(err, null);
            return;
        }

        console.log('아이디 %s로 검색됨.');
        if (results.length > 0) {

            var user = new db.UserModel({ id: id });
            var authenticated = user.authenticate(password, results[0]._doc.salt, results[0]._doc.hashed_password);

            if (authenticated) {
                console.log('비밀전호 일치함.');
                callback(null, results);
            } else {
                console.log('비밀번호 일치하지 않음.');
                callback(null, null);
            }
        } else {
            console.log('비밀번호 일치하지 사용자 없음.');
            callback(null, null);
        }


    });
};

//사용자 추가 함수
var addUser = function (db, id, password, name, callback) {
    console.log('addUser 호출됨.' + id + ',' + password + ', ' + name);

    var user = new db.UserModel({ "id": id, "password": password, "name": name });

    user.save(function (err) {
        if (err) {
            callback(err, null);
            return;
        }

        console.log('사용자 데이터 추가함');
        callback(null, user);
    });
};

module.exports.login = login;
module.exports.adduser = adduser;
module.exports.listuser = listuser;