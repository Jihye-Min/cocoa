
class stdAnswer
{
    constructor(number, pattern)
    {
        this.number = number;
        this.myPattern = pattern;           //학생의 찍기 패턴
        this.pSize = this.myPattern.length; //패턴의 사이즈
        this.myPaper = [];                 //학생의 정답지
        this.score = 0;
    }

    //학생의 정답지를 만드는 함수
    setStudentPaper(size)
    {
        //문제 개수만큼 반복하면서 학생의 정답지를 기록한다.
        for(let problem = 0; problem < size; problem ++)
        {
            this.myPaper.push(this.getMyAnswer(problem));
        }
    }

    //학생의 정답을 가져오는 함수
    getMyAnswer(problem)
    {
        let index = problem % this.pSize;       //문제 번호에 따라 내패턴의 몇 번째인지 체크
        let myAnswer = this.myPattern[index];

        return myAnswer;
    }

    //학생 점수 채점
    setGrade(answers)
    {
        for(let i = 0 ; i < answers.length; i ++)
        {
            if(answers[i] === this.myPaper[i])
            {
                this.score ++;
            }
        }
    }

    getStudentPaper()
    {
        return this.myPaper;
    }

    getStudentScore()
    {
        return this.score;
    }
}


function analyzeScore(clust_ans)
{
    let answer = [];
    let maxScore = 0;

    //최대값 찾기
    for(let key in clust_ans)
    {
        if(clust_ans[key] >= maxScore)
        {
            maxScore = clust_ans[key];
        }
    }

    //저장하기
    for(let key in clust_ans)
    {
        if(clust_ans[key] == maxScore)
        {
            answer.push(parseInt(key));
        }
    }

    //정렬
    answer.sort((a,b) => a - b);

    return answer;
}


function solution(answers) {
    let answer = [];
    let size = answers.length;      //총 문제 개수

    //학생별 찍기패턴에 맞게 정답지를 가져온다
    let student1 = new stdAnswer(1, [1, 2, 3, 4, 5]);
    let student2 = new stdAnswer(2, [2, 1, 2, 3, 2, 4, 2, 5]);
    let student3 = new stdAnswer(3, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

    let clust_std = [student1, student2, student3];
    let clust_ans = {};

    //채점
    clust_std.forEach(function(el)
    {
        el.setStudentPaper(size);
        el.setGrade(answers);
        clust_ans[el.number] = el.getStudentScore();
    });

    console.log(clust_ans);
    //분석
    answer = analyzeScore(clust_ans);

    return answer;
}



console.log(solution([1,2,3,4,5]));
console.log(solution([1,2,3,4,5,1,2,3,4,5,1,1,2]));
console.log(solution([2,1,2,3,2]));
console.log(solution([3,3,1,1,2,2,4,4,5,5]));
console.log(solution([1,3,2,4,2]));