const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const n = +input.shift();
const arr = input.map(e => e.split(' ').map(Number));

const rMap = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => 0));
const lMap = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => 0));

const check1 = (x, y) => {
  
}

arr.forEach(([t, x, y]) => {

})

console.log(rMap, lMap)
