// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	
	for await (const line of rl) {
		input.push(line);
		if(input.length === (+input[0] + 1)) rl.close();
	}
	
	const sol = (data) => {
		const n = +data.shift();
		let map = data.map(e => e.split(' ').map(Number));
		const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
		let time = 0;
		
		while(true){
			const que = [];
			let mapleCnt = 0;
			// map에 직접 단풍이 모두 물들게 하면 아침 기준의 구역을 이용하라는 조건에 부합하지 않음.
			const temp = Array.from({length: n}, () => Array(n).fill(0));
			
			for(let i = 0; i < n; i++){
				for(let j = 0; j < n; j++){
					if(map[i][j] !== 0) {
						que.push([i, j]);
						mapleCnt += map[i][j];
					}
				}
			}
			
			if(mapleCnt <= 0) break;
			time++;
			
			while(que.length > 0){
				const [y, x] = que.shift();
				let cnt = 0;
				
				for(let d = 0; d < 4; d++){
					const nY = y + dir[d][0];
					const nX = x + dir[d][1];
					if(nY >= 0 && nX >= 0 && nY < n && nX < n && map[nY][nX] === 0) cnt++;
				}
				
				temp[y][x] = map[y][x] < cnt ? 0 : map[y][x] - cnt;
				mapleCnt -= (map[y][x] < cnt ? map[y][x] : cnt);
			}
			
			map = temp;
			
		}
		console.log(time)
	}
	sol(input);
	process.exit();
})();
