console.log("hello world!");


var log_sequence = "";  //로그 기록용 전역변수


//입력받기
const readline = require("readline"); 

const rl = readline.createInterface({ 
	input: process.stdin, output: process.stdout
    }); 

    //end 입력받을때까지 무한히 반복
    //while(1)
{
    rl.on("line", function(line) {
        var info = line.split(',');
        
        if(info[0] != "circle" && info[0] != "rect" && info[0] != "trap")
        {
            logStr = "잘못 입력";
            console.log(logStr);
            setLog(logStr + ":" + info[0]);
        }
        if(info[0] == "end")
        {
            process.exit();    
        }
        getArea(info[0], info[1], info[2], info[3]);
        

        printExecutionSequence();
        rl.close(); 
        })
        .on("close", function() {
        process.exit();
    });
}



//도형 타입을 분류하고 로그기록&결과 출력하는 함수
function getArea(type, num1, num2, num3)
{
    result = type + " 넓이:";

    if(type == "circle")
    {
        if(num2 == "undefined")
        {
            result += getCircle1(num1);
        }
        else
        {
            result += getCircle2(num1, num2);
        }   
    }
    else if(type == "rect")
    {
        result += getRect(num1, num2);
        
    }
    else if(type == "trap")
    {
        result += getTrapezoid(num1, num2, num3);
    } 
    console.log(result);

    setLog(result);
}


//도형별 넓이를 구하는 함수 (총 4종)
function getCircle1(r)
{
    return r * r * Math.PI;
}

function getCircle2(r, n)
{
    sum = 0;
    for(i = r; i <= n; i ++)
    {
        sum += i * i * Math.PI;
    }
    return sum;
}

function getRect(a, b)
{
    return a * b;
}

function getTrapezoid(a, b, h)
{
    return (a + b) * h / 2;
}


//로그 기록 관련 함수 (총 2종)
function setLog(log)
{
    log_sequence += log + ",";
}

function printExecutionSequence()
{
    console.log(log_sequence);
}
