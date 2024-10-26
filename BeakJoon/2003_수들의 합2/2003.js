const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').map(Number);

let lp = 0;
let rp = 0;
let answer = 0;

while (lp < n && rp < n) {
  let sum = 0;
  for (let i = 0; i <= rp - lp; i++){
    sum += arr[lp + i];
  }
  
  if (sum === m) answer += 1;

  if (sum <= m) {
    if (rp < arr.length - 1) rp++;
    else {
      lp++;
    }
  }
  else {
    lp++;
  }
}

console.log(answer);