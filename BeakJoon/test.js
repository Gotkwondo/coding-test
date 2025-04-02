const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const n = +input.shift();
const [firstSpec, secondSpec] = input.pop().split(' ').map(Number);
const rooms = input.pop().split(' ').map(e => Number(e) > firstSpec ? Math.ceil((Number(e) - firstSpec) / secondSpec) : 0);

console.log(rooms.reduce((acc, cur) => acc + cur, 0) + n)