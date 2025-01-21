// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let T = undefined;
	let [N, K] = [undefined, undefined];
	let map = [];
	let tCount = 0;
	for await (const line of rl) {
		if(!T){
			T = +line;
		}
		else if(!N && !K){
			[N, K] = line.split(' ').map(Number);
		}
		else{
			map.push(line.split(' ').map(Number));
		}

		if(map.length === N){
			
			let min = Infinity;
			for(let my = 0; my < N - K + 1; my++){
				for(let mx = 0; mx < N - K + 1; mx++){
					let cnt = 0;
					for(let y = 0; y < K; y++){
						for(let x = 0; x < K; x++){
							if(map[my + y][mx + x] === 1) cnt++;
						}
					}
					if(min > cnt) min = cnt;
				}
			}
			console.log(min === Infinity ? 0 : min);
			tCount++;
			map = [];
			[N, K] = [undefined, undefined];
		}
		if(tCount === T) rl.close();
	}
	process.exit();
})();
