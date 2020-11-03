console.log("hello world!");


//입력받기
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  rl.close();
}).on("close", function() {
  process.exit();
});



//도형 타입을 받는 함수
function getArea(type, num1, num2, num3)
{
    result = type + " 넓이 : ";
    if(type == "circle")
    {
        result += getCircle(a);

    }
    else if(type == "rect")
    {

    }
    console.log(result);
}

//도형별 넓이를 구하는 함수 (총 3종)
function getCircle(r)
{
    return r * r * Math.PI;
}

function getRect(x, y)
{
    return x * y;
}

function getTrapezoid(a, b, h)
{
    return (a + b) * h / 2;
}
