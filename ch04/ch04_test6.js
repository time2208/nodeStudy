// 파일 관련 모듈
var fs = require('fs');

fs.readFile('../package.json', 'utf8', function(err, data){
    console.log(data);
});
