const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n] = input.shift();
const map = input.slice();
const total = map.reduce((acc, cur) => {
  return acc + cur.reduce((a, c) => a + c, 0);
}, 0);
let answer = Infinity;

const solution = (x, y, d1, d2) => {
  const temp = Array.from({ length: n }, () => Array(n).fill(0));
  const rate = Array(5).fill(0);
  rate[4] = total;

  for (let i = 0; i <= d1; i++) {
    temp[x + i][y - i] = 5;
    temp[x + d2 + i][y + d2 - i] = 5;
  }
  for (let i = 0; i <= d2; i++) {
    temp[x + i][y + i] = 5;
    temp[x + d1 + i][y - d1 + i] = 5;
  }

  
  // 1 
  for (let i = 0; i < x + d1; i++) {
    for (let j = 0; j <= y; j++) {
      if (temp[i][j]) break;
      rate[0] += map[i][j];
    }
  }
  // 2
  for (let i = 0; i <= x + d2; i++) {
    for (let j = n - 1; j > y; j--) {
      if (temp[i][j]) break;
      rate[1] += map[i][j];
    }
  }
  // 3
  for (let i = x + d1; i < n; i++) {
    for (let j = 0; j < y - d1 + d2; j++) {
      if (temp[i][j]) break;
      rate[2] += map[i][j];
      
    }
  }
  // 4
  for (let i = x + d2 + 1; i < n; i++) {
    for (let j = n - 1; j >= y - d1 + d2; j--) {
      if (temp[i][j]) break;
      rate[3] += map[i][j];
    }
  }
  
  for (let i = 0; i < 4; i++) {
    rate[4] -= rate[i];
  }
  rate.sort((a, b) => a - b);
  answer = Math.min(answer, rate[4] - rate[0]);
};

for (let i = 0; i < n; i++){
  for (let j = 0; j < n; j++){
    for (let k = 1; k < n; k++){
      for (let l = 1; l < n; l++){
        if (i + k + l >= n || j - k < 0 || j + l >= n) continue;
        solution(i, j, k, l);
      }
    }
  }
}

console.log(answer);
