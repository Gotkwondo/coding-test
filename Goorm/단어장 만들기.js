// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(line)
	}
	rl.close();
	
	const [n, k] = input.shift().split(' ').map(Number);
	
	console.log(input.sort((a, b) => {
		if(a.length > b.length) return 1
		if(a.length < b.length) return -1
		if(a > b) return 1
		if(a < b) return -1
	})[k-1]);
	process.exit();
})();
