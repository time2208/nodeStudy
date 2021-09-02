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
