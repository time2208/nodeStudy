# nodejs
* nodeJs 학습을 위한 공간입니다.
* easyspub(https://www.youtube.com/channel/UCkgDFniWXiEGY4SZm0NHf2w)의 "2017 Do it! Node.js 프로그래밍 [개정판]"을 참고하고 있습니다.)

--------------

## ch04
* parse()
    * 주소 문자열을 파싱하여 URL 객체를 만들어 준다.
* format()
    * URL 객체를 주소 문자열로 변환합니다.
* 이벤트
    * EventEmitter 사용
    * 한쪽에서 이벤트를 emit으로 보내고 다른 쪽에서 리스너를 등록하여 on으로 받음
* 파일
    * readFile(filename, [encoding], [callback])
        * 비동기식 IO로 파일을 읽어 들입니다.
    * readFileSync(filename, [encoding])
        * 동기식 IO로 파일을 읽어 들입니다.
    * writeFile(filename, data,encoding='utf8', [callback])
        * 비동기식 IO로 파일을 씁니다.
    * writeFileSync(filename, data,encoding='utf8')
        * 동기식 IO로 파일을 씁니다.
    * open(path, flags, [mode], [callback])
        * 파일을 열니다.
    * read(fd, buffer, offset, length, position, [callback])
        * 지정한 부분의 파일 내용을 읽어 들입니다.
    * write(fd, buffer, offset, length, position, [callback])
        * 파일의 지정한 부분에 데이터르 씁니다.
    * close(fd, [callback])
        * 파일을 닫아 줍니다.
* 웹서버
    * 노드에 기보능로 들어 있는 http모둘을 사용하여 웹서버 객체를 만듭니다.
    * creatServer() 메소드로 웹 서버 개체를 마들고 listen() 메소드로 대기
    * listen(port, [hostname], [backlog], [callback])
        * 서버를 실행시키고 대기시킵니다.
    * close([callback])
        * 서버를 종료합니다.
    * connection
        * 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트입니다.
    * request
        * 클라이언트가 요청할때 발생하는 이벤트입니다.
    * writeHead(statusCode, [statusMessage], [headers])
        * 응답으로 보낼 헤더를 만듭니다.
    * write(chunk, [encoding], [callback])
        * 응답 본문(body) 데이터를 만듭니다. 여러번 호출될 수 있습니다.
    * end([date], [encoding], [callback])
        * 클라이언트로 응갑을 전송합니다.
* 익스프레스
    * set(name, value)
        * 서버 설정을 위한 속성을 지정합니다.
    * get(name)
        * 서버 설정을 위해 지정한 속성을 꺼내 옵니다.
    * use([path], function ,[function..])
        * 미들웨어 함수를 사용하도록 합니다.
    * get([path], function)
        * 특정 패스로 요청된 정보를 처리합니다.
    * env
        * 서버 모드를 설정합니다.
    * views
        * 뷰들이 들어 있는 폴더 또는 폴거 배열을 설정합니다.
    * view engine
        * 디폴트로 사용할 뷰 엔진을 설정합니다.
* param() 과 header() 메소드 (Express4 기준)
    * query
        * 클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인합니다.
    * body
        * 클라이언트에서 POST 방식으로 전송한 파아미터를 확인합니다. (단 body-parser와 같은 외장 모듈을 사용해야 합니다.)
    * header(name)
        * 헤더를 확인합니다.
* 미들웨어
    * static
        * 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할을 함
* route()
    * Express4에서응 Router 미들웨어가 포함되어 있음
    * Router 객체를 참조한 후 route() 메소드를 이용해 라우팅
    * get(callback)
        * GET 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백 함수를 지정합니다.
    * post(callback)
        * POST 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백 함수를 지정합니다.
    * put(callback)
        * PUT 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백 함수를 지정합니다.
    * delete(callback)
        * DELETE 방식으로 특정 패스 요청이 발생했을 때 사용할 콜백 함수를 지정합니다.
    * all(callback)
        * 모든 요청 방식을 처리하며, 특정 패스 요청이 발생했을 때 사용할 콜백 함수를 지정합니다.
* 에러 페이지 처리
```javaScript
app.all('*', function(req, res){
    res.status(404).send('<h1>요청 페이지가 없습니다.</h1>');
});

//또는 
var expressErrorHandler = require('express-error-handler');

var errorHandler = expressErrorHandler({
    static: {
        '404':'./public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
```
* multer (파일 업로드용 미들웨어)
    * 파일 업로드 시 POST 방식으로 요청해야 하며 body-parser 미들웨어 사용 필요합니다.
    * fs, cors 모듈도 사용
* mongodb 모듈
    * connect()
        * 연결하기
    * collection()
        * 컬렉션 참조하기
    * find()
        * 문서찾기
* mongoose 모듈
    * connect(uri(s), [options], [callback])
        * mongoose를 사용해 데이터베이스에 연결한다. 연결 후에는 mongoose.connection 객체를 사용해 연결 관련 아벤트를 처리할 수 있습니다.
    * Schema()
        * 스키마를 정의하는 생성자입니다.
    * model(name, [schema], [collection], [skiplnit])
        * 모델을 정의합니다. [collection]이 지정되면 이 컬렉션을 사용하며, 지정하지 않으면 name으로 유추한 컬렉션을 사용합니다.
* 데이터베이스의 이벤트는 open, error, disconnected 등 있다.
* Schema() 메소드를 이용해 스키마 정의
```javaScript
var UserSchema = new mongoose.Schema({
    id:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: String,
    age: Number,
    create_at: Date
});
```
    * type
        * 자료형을 지정합니다.
    * required
        * 값이 true이면 반드시 들어가야 하는 속성이 됩니다.
    * unique
        * 값이 true이면 이 속성에 고유한 값이 들어가야 합니다.
    * 스키마를 만들때 인덱스를 추가할 수 있으며 스키마 객체에 메소드 추가 가능
    * static(name, fn)
        * 모델 객체에서 사용할 수 있는 함수를 등록합니다. 함수의 이름과 함수 객체를 파라미터로 전달합니다.
    * method(name, fn)
        * 모델 인스턴스 객체에서 사용할 수 있는 함수를 등록합니다. 함수의 이름과 함수 객체를 파라미터로 전달합니다.
* virtual()
    * 문서 객체에 저장되는 속성이 아닌 가상 속성을 지정할 수 있다.

* pug 뷰 템플레이트
    * 최대한 간단한 형태로 입력하므로 공백과 들여쓰기 기준으로 태그의 구조가 결정됨.
    * 들여쓰기르 잘모사면 문제 발생
    * 모듈 설치하고 뷰 엔진 설정 필요

* socket.io
    * listen() 메소드를 이용한 대기
        * attach(httpServer, options)
            * 웹 서버 인스턴스가 socket.io를 처리합니다.
        * listen(httpServer, options)
            * 위의 attach() 메소드와 같은 기능입니다.