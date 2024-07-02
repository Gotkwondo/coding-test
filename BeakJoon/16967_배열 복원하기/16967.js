const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [h, w, x, y] = input.shift();
const bArr = input;
const answer = Array.from({ length: h }, () => Array(w));

for (let i = 0; i < h; i++){
  const check = i < x ? true : false;
  
  if (check) {
    for (let j = 0; j < w; j++){
      answer[i][j] = bArr[i][j];
    }
  }
  else {
    for (let j = 0; j < w; j++){
      if (j < y) {
        answer[i][j] = bArr[i][j];
      }
      else answer[i][j] = bArr[i][j] - answer[i - x][j - y];
    }
  }
}

console.log(answer.reduce((acc1, cur1) => acc1 + cur1.reduce((acc2, cur2) => acc2 + cur2 + " ", "") + '\n', ""))