const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let n = null;
let doing = false;
let input;

const sol = (arr) => {
	let top = [Math.max(...arr), undefined];
	let leftTemp = [top[0], undefined];
	let rightTemp = [top[0], undefined];
	
	top[1] = arr.indexOf(top[0]);
	leftTemp[1] = top[1];
	rightTemp[1] = top[1];
		
	for(let i = top[1] - 1; i >=0; i--){
		if(leftTemp[0] < arr[i]) return 0;
		
		leftTemp[0] = arr[i];
		leftTemp[1] = i;
	}
		
		
	for(let i = top[1] + 1; i < n; i++){
		if(rightTemp[0] < arr[i]) return 0;
			
		rightTemp[0] = arr[i];
		rightTemp[1] = i;
	}
	
	return arr.reduce((acc, cur) => acc + cur, 0);
};

rl.on('line', (line) => {
	if(n === null) n = +line
	else{
		input = line.split(' ').map(Number);
		doing = true;
		
		console.log(sol(input));
	}
	if(doing) rl.close();
});

rl.on('close', () => {
	process.exit()
})