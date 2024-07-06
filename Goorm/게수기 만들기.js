// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const input = [];
let t = null;

rl.on("line", function(line) {
	if(t === null) t = +line
	else if(input.length < 3){
		input.push(line)
	}
	if(input.length === 3){
		const max = input.shift().split(' ').map(Number);
		const arr = input.shift().split(' ').map(Number);
		let cnt = +input.shift();
		
		for(let i = 0; i < cnt; i++){
			arr[t - 1] += 1;
			for(let j = t - 1; j > 0; j--){
				if(arr[j] > max[j]){
					arr[j] = 0;
					arr[j - 1] += 1;
				}
			}
			if(arr[0] > max[0]) arr[0] = 0;
		}
		console.log(arr.join(''))
		rl.close();
	}
}).on("close", function() {
	process.exit();
});