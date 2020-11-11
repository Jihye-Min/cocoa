
class MyStack
{
    constructor()
    {
        this.arr = [];
        this.depth = [];        //스택의 현재 길이 저장. 최대 깊이를 체크하기 위한 배열
        //this.cnt_depth = 0;     //깊이 수준 체크
        this.cnt_num = 0;       //원소 개수 체크
        this.cnt_err = 0;       //괄호 에러 체크
        this.json = {};
    }

    // 데이터를 분석하는 함수
    setStackData(data)
    {
        for(let ch of data)
        {
            if(ch == '[')
            {
                this.arr.push(ch);
                this.depth.push(this.arr.length);
                //this.cnt_depth ++;
            }
            else if(ch == ']')
            {
                if(this.arr.length > 0)
                {
                    this.arr.pop();
                }
                else
                {
                    this.cnt_err ++;
                }
            }
            else if(ch != ',')
            {
                this.cnt_num ++;
            }
        }   //end for
    }
    
    //데이터에 대한 정보를 요약 출력하는 함수
    printStackData()
    {
        if(this.cnt_err > 0 || this.arr.length != 0)
        {
            console.log("닫는 괄호가 일치하지 않습니다");
        }
        if(this.arr.length == 0 && this.cnt_err == 0)
        {
            let maxDepth = Math.max.apply(null, this.depth);
            console.log(`깊이 수준은 ${maxDepth}이며, 총 ${this.cnt_num}개의 원소가 포함되어 있습니다`);
        }    
    }
/*
    //데이터를 제이슨타입의 계층구조로 만드는 함수
    setJsonData(data)
    {
        for(let ch of data)
        {
            if(ch == '[')
            {
                this.json["type"] = "array";
            }
            else if(ch == ']')
            {
                if(this.arr.length > 0)
                {
                    
                }
                else
                {
                    
                }
            }
            else if(ch != ',' && typeof(parseInt(ch)) == "number")
            {
                this.json["type"] = "number";
                this.json["value"] = parseInt(ch);

            }
        }   //end for    
    }

    printJsonData()
    {
        if(this.cnt_err > 0 || this.arr.length != 0)
        {
            console.log("잘못된 데이터로 json 데이터를 만들 수 없습니다.")
        }
        if(this.arr.length == 0 && this.cnt_err == 0)
        {
            console.log(this.json);
        }
    }*/
}


// 메인 출력용 함수
function run(data)
{
    let myStack = new MyStack();
    console.log(data);
    myStack.setStackData(data);
    myStack.printStackData();
    myStack.setJsonData(data);
    //myStack.printJsonData();
}



///// test case /////
const data = "[1,2,[3,4,[5,[6]]]]";
run(data);

const data2 = "[1,2,[3,4,[5,[6]]";
run(data2);

const data3 = "[[1],[2]]";
run(data3);

const data4 = "[1,[[[2],3],4,5,6]]";
run(data4);

const data5 = "[1,[[[2],[3]],4,5,6]]";
run(data5);

