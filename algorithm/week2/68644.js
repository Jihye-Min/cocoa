function solution(numbers) {
    let answer = [];

    for(let i = 0; i < numbers.length; i ++)
    {
        for(let j = 0; j < numbers.length; j ++)
        {
            if(i != j)
            {
                let num = numbers[i] + numbers[j];
                if(answer.find(el => el === num) === undefined)
                {
                    answer.push(num);
                }
            }
        }   
    }

    //정렬
    answer = answer.sort((a,b) => a - b);

    return answer;
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));

console.log(solution([2,0,0]));
console.log(solution([0,0,2]));