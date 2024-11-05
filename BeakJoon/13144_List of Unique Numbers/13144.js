const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

let n = +input.shift();
const arr = input[0].split(' ').map(Number);
let answer = 0;
const check = Array.from({ length: 100000 }, () => 0);
let [lp, rp] = [0, 0];

while (rp < n) {
  if (!check[arr[rp]]) {
    check[arr[rp]] = 1;
    rp++;
  }
  else {
    answer += (rp - lp);
    check[arr[lp]] = 0;
    lp++;
  }
}
answer += (rp - lp) * (rp - lp + 1) / 2;

console.log(answer);