// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	for await (const line of rl) {
		input.push(line.split(' ').map(Number));
	}
	rl.close();

	const [n, m] = input.shift();
	const map = input.shift();
	const check = new Set();
	
	for(let i = 1; i <= m; i++){
		const [st, ed] = input[i-1];
		for(let j = st - 1; j < ed; j++){
			map[j] += 1;
			check.add(j);
		}
		
		
		if(i % 3 === 0){
			for(const pos of check){
				map[pos] -= 1;
			}
			check.clear();
		}
	}
	
	console.log(map.join(' ') + '\n')
	
	process.exit();
})();