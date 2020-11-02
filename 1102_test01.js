console.log("hello world!");


//입력받기
const readline = require("readline"); 

const rl = readline.createInterface({ 
	input: process.stdin, output: process.stdout
    }); 
    
rl.on("line", function(line) {
    var info = line.split(',');

    console.log(info[0]);
    console.log(info[1]); 
    console.log(info[2]);
    console.log(info[3]);
    rl.close(); 
    })
    .on("close", function() {
    process.exit();
});