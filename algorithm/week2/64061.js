
class Basket
{
    constructor()
    {
        this.result = 0;        //꺼낸 인형의 개수를 기록하는 변수
        this.stack = [];        //장바구니 스택
    }

    //바구니에 인형넣기
    putDoll(doll)
    {
            //이전 인형과 동일한 인형인 경우 pull함수 호출
            if(this.stack.length > 0 && this.stack[this.stack.length-1] === doll)
            {
                this.result ++;
                this.pullDoll();
            }
            else
            {
                this.stack.push(doll);
            }        
    }

    //바구니에서 인형 꺼내기 (1개 꺼냄)
    pullDoll()
    {
        this.result ++;
        this.stack.pop();
    }
}

class Board
{
    constructor(board)
    {
        this.board = board;
        this.size = this.board.length;
    }

    //보드에서 인형 꺼내기
    pullDollBoard(line)
    {
        let depth = [];
        let doll = 0;
        
        for(let i = 0; i < this.size; i++)
        {
            depth = this.board[i];
            if(depth[line - 1] !== 0) 
            {
                doll = depth[line - 1];
                depth[line - 1] = 0;        //꺼냈으니 빈거로 처리 해준다.
                break;
            }
        }

        return doll;
    }
}


function solution(board, moves) {
    let answer = 0;

    let myBoard = new Board(board);
    let myBasket = new Basket();

    moves.forEach(element => {
        //보드에서 인형 빼기
        let doll = myBoard.pullDollBoard(element);

        //꺼낸게 있는 경우에만 장바구니 넣는다.
        if(doll !== 0)
        {
            myBasket.putDoll(doll);
        }
    });

    answer = myBasket.result;

    return answer;
}


console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
console.log(solution([[0,0,0,0,0],[1,0,3,0,0],[0,2,5,100,0],[4,2,4,4,2],[3,5,1,3,100]], [1,5,3,5,1,2,1,4]));

