const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e);

const n = input.shift();

console.log(n % 2 === 1 ? 'SK' : 'CY');