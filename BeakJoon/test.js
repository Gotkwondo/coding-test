const [input, ...arr] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')
  .map(e => e.trim().split(' '));

const [N, M, B] = input;
let answer = [0, 0];



console.log(N, M, B);
console.log(arr)