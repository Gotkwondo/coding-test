const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, d, k, c] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

let answer = 0;

for (let i = 0; i < arr.length - k; i++){
  
}