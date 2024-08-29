const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e);

const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(Number);
let [lp, rp] = [0, 0];
let answer = Infinity;

arr.sort((a, b) => a - b);

while (lp < n && rp < n) {
  const sub = arr[rp] - arr[lp];

  if (sub < m) {
    rp++;
  }
  else if (sub >= m) {
    answer = Math.min(answer, sub);
    lp++;
  }
}

console.log(answer);