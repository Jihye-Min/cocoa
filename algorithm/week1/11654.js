
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var str;
var ascStr;
rl.on('line', function(str) {  
    ascStr = str.charCodeAt();
    rl.close();
})
.on('close', function() { 
    console.log(ascStr);
    process.exit();
});