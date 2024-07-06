const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, c] = input.shift();
let arr = input[0];
const map = new Map();

arr.forEach((e, idx) => {
  if (map.has(e)) {
    const [cnt, index] = map.get(e);
    map.set(e, [cnt + 1, index]);
  }
  else {
    map.set(e, [1, idx]);
  }
});

console.log([...map].sort((a, b) => {
  if (a[1][0] === b[1][0]) {
    return a[1][1] - b[1][1];
  }
  return b[1][0] - a[1][0];
}).map(([num, [cnt, _]]) => {
  let arr = [];
  for (let i = 0; i < cnt; i++){
    arr.push(num);
  }
  return arr.join(' ');
}).join(' '));