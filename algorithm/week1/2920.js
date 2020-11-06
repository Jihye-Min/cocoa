
function sortCheck(arr_num)
{
    let ascCnt = 1;
    let desCnt = 1;

    for(i = 0; i < arr_num.length; i++)
    {
        if(arr_num[i] < arr_num[i + 1])
        {
            ascCnt ++;
        }
        if(arr_num[i] > arr_num[i + 1])
        {
            desCnt ++;
        }
    }

    let result = "";
    if(ascCnt == arr_num.length)
    {
        result = "ascending";
    }
    else if(desCnt == arr_num.length)
    {
        result = "descending";
    }
    else
    {
        result = "mixed";
    }

    return result;
}


function test()
{
    const { timeStamp } = require('console');
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let result;

    rl.on('line', function(inputNum) {
        arr_num = inputNum.split(' ').map(el => parseInt(el));
        result = sortCheck(arr_num);
        rl.close();
    })
    .on('close', function() { 
        console.log(result);
        process.exit();
    });
}


test();