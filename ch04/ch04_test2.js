//이벤트를 받기 위해 on() 사용
process.on('exit', function(){
    console.log('exit 이벤트 발샹함.');
});

setTimeout(function(){
    console.log('2초 후에 실행되었음.');

    process.exit();
}, 2000);

console.log('2초 후에 실행됩니다.');