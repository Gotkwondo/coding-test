const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  const [n, k] = input.shift();
  const arr = input[0];
  const withBinary = arr.map(e => [e, e.toString(2).split('').filter(e => e === '1').length]);
	
  console.log(withBinary.sort((a, b) => b[1] - a[1] || b[0] - a[0])[k - 1][0]);
  process.exit();
});
