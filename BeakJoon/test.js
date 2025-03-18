const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, l] = input.shift().split(' ').map(Number);
const map = input.map(e => e.split(' ').map(Number));
let answer = 0;

const check = (arr) => {
  let used = Array(n).fill(false); // 경사로 설치 여부 체크
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    } else if (arr[i] - arr[i - 1] === 1) {
      for (let j = i - 1; j >= i - l; j--){
        if (j < 0 || arr[j] !== arr[i - 1] || used[j]) return false;
        used[j] = true;
      }
    } else if (arr[i] - arr[i - 1] === -1) {
      for (let j = i; j < i + l; j++){
        if (j >= n || arr[j] !== arr[i] || used[j]) return false;
        used[j] = true;
      }
    } else {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < n; i++){
  const arr = map[i];
  if (check(arr)) {
    answer += 1;
  }
}

for (let i = 0; i < n; i++){
  let arr = [];
  for (let j = 0; j < n; j++){
    arr.push(map[j][i]);
  }
  if (check(arr)) {
    answer += 1;
  }
}

console.log(answer)