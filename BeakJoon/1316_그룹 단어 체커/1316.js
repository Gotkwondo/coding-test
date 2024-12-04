const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const n = +input.shift();
const arr = input.map(e => e.split(''));
let answer = 0;

for (let word of arr) {
  const obj = {};
  let flag = false;

  for (let i = 0; i < word.length; i++) {
    const w = word[i];

    if (!obj[w] || i === 0) obj[w] = 1;
    else if (word[i - 1] !== w) {
      flag = true;
      break;
    }
    else obj[w] += 1;
  }
  if (!flag) answer++;
}
console.log(answer);