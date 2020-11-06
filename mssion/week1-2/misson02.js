var arr_num = new Array();  //숫자를 전부 저장하는 배열
var arr_myNum = new Array(); //내 차례의 숫자를 전부 저장하는 배열


//모든 숫자를 진법에 맞게 변환하고 출력까지 해주는 메인 함수
//n : 진법, t : 미리구할 숫자의 개수, m : 게임에 참가하는 인원
function solution(n, t, m)
{
    for(i = 0 ;  i < (t * m) ; i ++)
    {
        nowNum = getConvertNum(n, i);
    }

    printAllNum(arr_num);
}

//n진수로 변환해서 배열에 저장하는 함수
//n : n진법, nowNum : 현재숫자
function getConvertNum(n, nowNum)
{
    var splitNum = nowNum.toString(n).split('');

    splitNum.forEach(element => {
        arr_num.push(element);
    });
}

//내 차례에 말해야 하는 숫자를 배열에 저장 (15)
//m : 게임에 참가하는 인원(3), p : 나의 순서(1~3) 
function setMyNumArr(p, m)
{
    for(i = 0 ; i < arr_num.length; i ++)
    {
        nowV = i % m + 1;
        if(nowV == p)
        {
            arr_myNum.push(arr_num[i]);
        }
    }

    printMyNum(arr_myNum);
}

//배열에 담긴 2진수를 전부 출력해주는 함수
function printAllNum(arr_num)
{
    //arr_num.forEach(element => console.log(element));
    console.log(arr_num.join());
}

function printMyNum(arr_myNum)
{
    //arr_myNum.forEach(element => console.log(element));
    console.log(arr_myNum.join());
}



//TestCase
//n : 진법, t : 미리구할 숫자의 개수, m : 게임에 참가하는 인원, p : 나의 순서
n = 16;
t = 10;
m = 2;
p = 2;
solution(n, t, m);
console.log(`\n##### 내가 말해야할 숫자는? (나의 순서 : ${p}) ######`);
setMyNumArr(p, m);
