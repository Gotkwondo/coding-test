const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let n = null;
let input = [];
let answer = 0;
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

rl.on('line', (line) => {
	if(n === null) n = +line;
	else if(input.length < n) input.push(line.split(' ').map(Number));
	
	if(input.length === n){
		rl.close();
	}
});

rl.on('close', () => {
	const temp = Array.from({ length: n }, () => Array(n).fill(false));
		
		for(let i = 0; i < n; i++){
			for(let j = 0; j < n; j++){
				if(input[i][j] === 0 || temp[i][j] === true) continue;
				answer++;
				temp[i][j] = true;
				
				const que = [[i, j]];
				
				while(que.length){
					const [x, y] = que.shift();
					
					
					for(let k = 0; k< 4; k++){
						const nx = x + dir[k][0];
						const ny = y + dir[k][1];
						
						if(nx >= 0 && nx < n && ny >= 0 && ny < n && input[nx][ny] === 1 && !temp[nx][ny]){
							que.push([nx, ny]);
							temp[nx][ny] = true;
						}
					}
				}
			}
		}
		console.log(answer);
	process.exit();
})