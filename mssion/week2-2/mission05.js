
class MyStack
{
    constructor(data)
    {
        this.data = data;       //스트링 원본 데이터
        this.arr_stack = [];    //스택 처리용 배열
        this.arr_depth = [];    //스택의 현재 길이 저장. 최대 깊이를 체크하기 위한 배열
        this.arr_num = [];      //원소 개수 체크용 배열
        this.cnt_num = 0;       //원소 개수
        this.cnt_err = 0;       //괄호 에러 발생 회수
    }

    // 숫자 개수 체크 함수
    checkNumberCount()
    {
        this.arr_num = this.data.replace(/\[/g,'');
        this.arr_num = this.arr_num.replace(/\]/g,'');
        this.arr_num = this.arr_num.split(',');

        this.cnt_num = this.arr_num.length;

        //예외처리 추가. 리플레이스 함수써서 변환 시 ''도 원소개수로 체크하기 때문에 0으로 변경..
        if(this.cnt_num === 1 && this.arr_num[0] === '')    
        {
            this.cnt_num = 0;
        }
    }

    // 괄호 분석 함수
    checkStackData()
    {
        for(let ch of this.data)
        {
            if(ch === '[')
            {
                this.arr_stack.push(ch);
                this.arr_depth.push(this.arr_stack.length);
            }
            else if(ch === ']')
            {
                if(this.arr_stack.length > 0)
                {
                    this.arr_stack.pop();
                }
                else
                {
                    this.cnt_err ++;
                }
            }
        }   //end for
    }
    
    //데이터에 대한 정보를 요약 출력하는 함수
    printStackData()
    {
        if(this.cnt_err > 0 || this.arr_stack.length != 0)
        {
            console.log("닫는 괄호가 일치하지 않습니다");
        }
        if(this.arr_stack.length === 0 && this.cnt_err === 0)
        {
            let maxDepth = Math.max.apply(null, this.arr_depth);
            console.log(`깊이 수준은 ${maxDepth}이며, 총 ${this.cnt_num}개의 원소가 포함되어 있습니다`);
        }    
    }
}


// 메인 출력용 함수
function run(data)
{
    let myStack = new MyStack(data);
    console.log(data);
    myStack.checkNumberCount();
    myStack.checkStackData();
    myStack.printStackData();
}



///// test case /////
let data = "[1,2,[3,4,[5,[6]]";
run(data);

data = "]1[";
run(data);

data = "[1,2]]";
run(data);

data = "[1]";
run(data);

data = "[]";
run(data);

data = "[1,2,[3,4,[5,[6]]]]";
run(data);

data = "[[10],[12]]";
run(data);

data = "[1,[[[2],3],4,5,6]]";
run(data);

data = "[1,[[[2],[3]],4,5,6]]";
run(data);
