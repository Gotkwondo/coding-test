const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [r, c, k] = input.shift();
const arr = input;
let cnt = 0;
let temp = Array.from({ length: 101 }, () => Array(101).fill(0));
let n = 3;
let m = 3;

for (let i = 1; i <= 3; i++){
  for (let j = 1; j <= 3; j++){
    temp[i][j] = arr[i - 1][j - 1];
  }
}

while (true) {
  if (cnt > 100) {
    cnt = -1;
    break;
  }
  else if (temp[r][c] === k) {
    break;
  }
  
  if (n >= m) {
    let maxL = m;
    for (let i = 1; i <= n; i++){
      const map = new Map();
      for (let j = 1; j <= m; j++){
        if (temp[i][j] === 0) continue;
        map.has(temp[i][j]) ? map.set(temp[i][j], map.get(temp[i][j]) + 1) : map.set(temp[i][j], 1);
        temp[i][j] = 0;
      }
      const test = [...map].sort((a, b) => a[1] - b[1] || a[0] - b[0]);
      if (test.length * 2 > maxL) maxL = test.length * 2;
      test.flat().forEach((el, idx) => {
        temp[i][idx + 1] = el;
      });
    }
    m = maxL;
  }
  else if (n < m) {
    let maxL = n;
    for (let i = 1; i <= m; i++){
      const map = new Map();
      for (let j = 1; j <= n; j++){
        if (temp[j][i] === 0) continue;
        map.has(temp[j][i]) ? map.set(temp[j][i], map.get(temp[j][i]) + 1) : map.set(temp[j][i], 1);
        temp[j][i] = 0;
      }
      const test = [...map].sort((a, b) => a[1] - b[1] || a[0] - b[0]);
      if (test.length * 2 > maxL) maxL = test.length * 2;
      test.flat().forEach((el, idx) => {
        temp[idx + 1][i] = el;
      })
    }
    n = maxL;
  }
  cnt++;
}

console.log(cnt);