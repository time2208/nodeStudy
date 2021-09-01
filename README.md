# nodejs
* nodeJs 학습을 위한 공간입니다.
* easyspub(https://www.youtube.com/channel/UCkgDFniWXiEGY4SZm0NHf2w)의 "2017 Do it! Node.js 프로그래밍 [개정판]"을 참고하고 있습니다.

=================

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
