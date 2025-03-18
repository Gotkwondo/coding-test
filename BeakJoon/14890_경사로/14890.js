const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, l] = input.shift().split(" ").map(Number);
const map = input.map((e) => e.split(" ").map(Number));
let answer = 0;

const check = (arr) => {
  let used = Array(n).fill(false); // 경사로 설치 여부 체크
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    } else if (arr[i] - arr[i - 1] === 1) {
      for (let j = i - 1; j >= i - l; j--) {
        if (j < 0 || arr[j] !== arr[i - 1] || used[j]) return false;
        used[j] = true;
      }
    } else if (arr[i] - arr[i - 1] === -1) {
      for (let j = i; j < i + l; j++) {
        if (j >= n || arr[j] !== arr[i] || used[j]) return false;
        used[j] = true;
      }
    } else {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < n; i++) {
  const arr = map[i];
  if (check(arr)) {
    answer += 1;
  }
}

for (let i = 0; i < n; i++) {
  let arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(map[j][i]);
  }
  if (check(arr)) {
    answer += 1;
  }
}

console.log(answer);

// const { link } = require('fs');

// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
//   .toString().trim().split('\n').map(e => e.split(' ').map(Number))

// const [n, l] = input.shift();
// let map = input.slice();
// let answer = 0;
// let newMap = Array.from(Array(n), () => Array(n));

// for (let i = 0; i < n; i++){
//   const checkArr = map[i];
//   let sameL = 1;

//   for (let j = 1; j < n; j++){
//     if (checkArr[j] === checkArr[j - 1]) sameL += 1;
//     else if (checkArr[j] - 1 === checkArr[j - 1] && sameL >= l) {
//       sameL = 1;
//     }
//     else if (checkArr[j] + 1 === checkArr[j - 1] && sameL >= 0) {
//       sameL = 1 - l;
//     }
//     else {
//       sameL = -1;
//       break;
//     }
//   }
//   if (sameL >= 0) {
//     answer += 1;
//   }
// }

// for (let i = 0; i < n; i++){
//   for (let j = 0; j < n; j++){
//     newMap[j][i] = map[i][j];
//   }
// }

// for (let i = 0; i < n; i++){
//   const checkArr = newMap[i];
//   let sameL = 1;

//   for (let j = 1; j < n; j++){
//     if (checkArr[j] === checkArr[j - 1]) sameL += 1;
//     else if (checkArr[j] - 1 === checkArr[j - 1] && sameL >= l) {
//       sameL = 1;
//     }
//     else if (checkArr[j] + 1 === checkArr[j - 1] && sameL >= 0) {
//       sameL = 1 - l;
//     }
//     else {
//       sameL = -1;
//       break;
//     }
//   }
//   if (sameL >= 0) {
//     answer += 1;
//   }
// }
// console.log(answer);
