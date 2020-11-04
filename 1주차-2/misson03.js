
//factorial 함수
function calculate(n)
{
    var arr_fac = new Array();
    var num = 1;
    for(i = 1; i <= n; i ++)
    {
        num *= i;   
        arr_fac.push(num);
    }

    return arr_fac;
}


//id 필터 함수
function filterId(peoples)
{
    var arr_filter = new Array();
    //r newPeoples = new Array();

    peoples.forEach(element => {
        var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

        if(!regExp.test(element))    //특수기호 없는지 체크
        {
            var regExp2 = /[(0-9)]/g;
            if(regExp2.test(element))    //숫자 있으면 숫자 제외하고 푸쉬
            {
                arr_filter.push(element.replace(/[0-9]/g, ""));
            }
            else    //숫자 없으면 그냥 푸쉬
            {
                arr_filter.push(element);
            }
        }
    });

    console.log(arr_filter.join());
}


//평균 구하는 함수
function printScore(grades)
{
    arr_ave = new Array();  //각 학생의 평균점수
    arr_maxAve = new Array();   //모든 학생의 최고점수의 평균점수

    var sum = 0;
    grades.forEach(student => {
        //학생의 평균 구하기
        student.forEach(score => {
            sum += score;
        });
        arr_ave.push(sum / student.length);
        sum = 0;
        
        //학생의 최대값 찾기
        var max = Math.max.apply(null, student);
        arr_maxAve.push(max);
    });

    //학생들 최고점수의 평균 구하기
    var sum2 = 0;
    arr_maxAve.forEach(maxScore => {
        sum2 += maxScore;
    });
    var maxAve = (sum2 / grades.length);
    
    console.log(`각 학생의 평균점수 :\n${arr_ave.join()}`);
    console.log(`모든 학생의 최고점수의 평균점수 :\n${maxAve}`);
}





//Test Case - 1. factorial 함수
console.log("##### Test Case - 1. factorial 함수 #####")
console.log(calculate(4).join());

//Test Case - 2. 배열 거르기
console.log("\n\n##### Test Case - 2. 배열 거르기 #####")
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
filterId(peoples);

//Test Case - 3. 평균 구하기
console.log("\n\n##### Test Case - 3. 평균 구하기 #####")
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
printScore(grades);

