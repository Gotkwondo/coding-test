const { link } = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [n, l] = input.shift();
let map = input.slice();
let answer = 0;
let newMap = Array.from(Array(n), () => Array(n));

for (let i = 0; i < n; i++){
  const checkArr = map[i];
  let sameL = 1;
  
  for (let j = 1; j < n; j++){
    if (checkArr[j] === checkArr[j - 1]) sameL += 1;
    else if (checkArr[j] - 1 === checkArr[j - 1] && sameL >= l) {
      sameL = 1;
    }
    else if (checkArr[j] + 1 === checkArr[j - 1] && sameL >= 0) {
      sameL = 1 - l;
    }
    else {
      sameL = -1;
      break;
    }
  }
  if (sameL >= 0) {
    answer += 1;
  }
}

for (let i = 0; i < n; i++){
  for (let j = 0; j < n; j++){
    newMap[j][i] = map[i][j];
  }
}

for (let i = 0; i < n; i++){
  const checkArr = newMap[i];
  let sameL = 1;
  
  for (let j = 1; j < n; j++){
    if (checkArr[j] === checkArr[j - 1]) sameL += 1;
    else if (checkArr[j] - 1 === checkArr[j - 1] && sameL >= l) {
      sameL = 1;
    }
    else if (checkArr[j] + 1 === checkArr[j - 1] && sameL >= 0) {
      sameL = 1 - l;
    }
    else {
      sameL = -1;
      break;
    }
  }
  if (sameL >= 0) {
    answer += 1;
  }
}
console.log(answer);