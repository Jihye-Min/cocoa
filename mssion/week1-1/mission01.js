var log_sequence = new Array();  //로그 기록용 배열객체


//사용자한테 입력받기 (솔직히 아직도 이 파일입출력 코드가 정확히 어떻게 작동하는건지 이해가 안간다..)
console.log("넓이를 구할 도형(circle, rect, trap)과 수치를 입력하시오.\n입력 형식 : 도형명,정수1,정수2,정수3")

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    var info = line.split(',');
    
    //종료 및 잘못 입력에 대한 예외처리
    if(info[0] == "end")
    {
        console.log("##### 로그출력 #####");
        printExecutionSequence();
        rl.close();
    }
    else if(info[0] != "circle" && info[0] != "rect" && info[0] != "trap")
    {
        console.log("[ERROR] Mistyped!!");
        //setLog(logStr + ":" + info[0]);
        setLog(`Mistyped:${info[0]}`);
    }
    else    //정상적으로 입력 받으면, 넓이를 구한다.
    {
        getArea(info[0], info[1], info[2], info[3]);
    }
}).on("close", function() {
    process.exit();
});




//도형 타입을 분류하고 로그기록&결과 출력하는 함수
function getArea(type, num1, num2, num3)
{
    if(type == "circle")
    {
        if(num2 == undefined)
        {
            area = getCircle1(num1);
        }
        else
        {
            area = getCircle2(num1, num2);
        }   
    }
    else if(type == "rect")
    {
        area = getRect(num1, num2);
        
    }
    else if(type == "trap")
    {
        area = getTrapezoid(num1, num2, num3);
    } 
    //console.log(type + " 넓이:" + area);
    console.log(`${type} 넓이는? : ${area}`);

    //setLog(type + ":" + area);
    setLog(`${type}:${area}`);
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
    log_sequence.push(log);
}

function printExecutionSequence()
{
    log_sequence.forEach(element => console.log(element));;
}


/*
//테스트 케이스
getArea('circle', 1);
getArea('circle', 1, 2);
getArea('circle', 3, 5);
getArea('rect', 5, 10);
getArea('trap', 4, 3, 10);
getArea('rect', 6, 4);


console.log("#####로그출력#####");
printExecutionSequence();
*/