// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	let t = null;
	
	for await (const line of rl) {
		if(t === null) t = +line
		else{
			input.push(line);
			if(input.length === t){
				let answer = '';
				const arr = input.map((e, i) => {
					const [v, c] = e.split(' ');
					return [Math.floor(+v * +c * 10) / 10, i + 1];
				});
				
				arr.sort(([a, i1], [b, i2]) => {
					if(a > b) return -1;
					else if(a < b) return 1;
					else {
						return i1 - i2;
					}
				})
				
				arr.forEach(([_, i]) => answer += `${i} `);
				console.log(answer.trim());
				rl.close();
			}
		}
	}
})();
