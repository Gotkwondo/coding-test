// Run by Node.js
const readline = require('readline');

const sol = (n, limit, arr) => {
	let answer = 0;
	let lp = 0;
	let rp = 0;
	
	arr.sort((a, b) => a - b);
	
	while(lp < n && rp < n){
		const width = arr[rp] - arr[lp];
		const antNum = rp - lp + 1;
		if(width <= limit) {
			answer = Math.max(answer, antNum);
			rp++;
		}
		else if(width > limit) {
			lp++;
		}
	}
	return n - answer;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = []
	
	for await (const line of rl) {
		if(input.length < 2) input.push(line.split(' ').map(Number));
		if(input.length === 2) rl.close();
	}
	console.log(sol(input[0][0], input[0][1], input[1]));
	process.exit();
})();
