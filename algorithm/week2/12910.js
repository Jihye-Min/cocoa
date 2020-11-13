function solution(arr, divisor) {
    let answer = [];

    //나누기
    arr.forEach(element => {
        if(element % divisor === 0)
        {
            answer.push(element);
        }
        
    });

    //예외 처리
    if(answer.length === 0)
    {
        answer.push(-1);
    }

    //정렬
    answer = answer.sort((a,b) => a - b);

    return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3,2,6], 10));
