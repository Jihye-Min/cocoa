//달력 만들기 함수
function setCalendar()
{
    let calendar = [];

    for(let month = 1; month <= 12; month ++)
    {
        let maxDay;
        if(month == 2)
        {
            maxDay = 29;
        }
        else if(month == 1 || month == 3 || month == 5 ||
            month == 7 || month == 8 || month == 10 ||
            month == 12)
        {
            maxDay = 31;
        }
        else
        {
            maxDay = 30;
        }

        //"월-일" 형식으로 배열에 추가
        for(let day = 1; day <= maxDay; day ++)
        {
            calendar.push(month + '-' + day);
        }
    }

    return calendar;
}

// 요일 찾기 함수
function getDayOfWeek(calendar, a, b)
{
    //요일 찾기
    let index = calendar.findIndex(el => el === (a + '-' + b));

    if(index % 7 == 0)         {        return "FRI";    }
    else if(index % 7 == 1)    {        return "SAT";    }
    else if(index % 7 == 2)    {        return "SUN";    }
    else if(index % 7 == 3)    {        return "MON";    }
    else if(index % 7 == 4)    {        return "TUE";    }
    else if(index % 7 == 5)    {        return "WED";    }
    else if(index % 7 == 6)    {        return "THU";    }
}


function solution(a, b) {
    let answer = '';

    let calendar = setCalendar();
    answer = getDayOfWeek(calendar, a, b);

    return answer;
}

console.log(solution(1,1));
console.log(solution(1,2));
console.log(solution(1,3));
console.log(solution(1,28));
console.log(solution(1,31));
console.log(solution(2,1));
console.log(solution(2,28));
console.log(solution(5,24));