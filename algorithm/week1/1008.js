
//데이터를 읽는데 사용되는 인터페이스인 readline모듈 호출
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num_arr = new Array();

//line 이벤트. \n이나 엔터 같이 한줄 입력이 종료되는 시점에 발생하는 이벤트
//두 번째 인자는 입력받은 것을 처리하고 실행
rl.on('line', function(inputNum) {  
    num_arr = inputNum.split(' ');
    rl.close();     //readline 인터페이스를 종료시키는 메소드
})
////close 이벤트. rl.close 메소드가 호출될 때 발생하는 이벤트
//두 번째 인자에 있는 것을 실행
.on('close', function() { 
    console.log(parseFloat(num_arr[0]) / parseFloat(num_arr[1]));
    process.exit();
});