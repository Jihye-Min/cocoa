
//데이터를 읽는데 사용되는 인터페이스인 readline모듈 호출
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num;

rl.on('line', function(num) {  
    
    for(i = 1; i <= num; i++)
    {
        for(j = 0; j < i; j++)
        {
            process.stdout.write("*");  //줄바꿈 없이 출력하는 함수
        }
        process.stdout.write("\n");
    }

    rl.close();
})
.on('close', function() { 
    process.exit();
});