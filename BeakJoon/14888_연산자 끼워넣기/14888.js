const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = +input.shift();
const numbers = input.shift().split(" ").map(Number);
const ary = input.shift().split(" ").map(Number);
const signType = ["+", "-", "*", "/"];
const calcSign = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if ((a > 0 && b > 0) || (a < 0 && b < 0))
      return Math.floor(Math.abs(a) / Math.abs(b));
    else if (a === 0 || b === 0) return 0;
    else return Math.floor(Math.abs(a) / Math.abs(b)) * -1;
  },
};
let signCnt = 0;
let answer = [-Infinity, Infinity];

for (let i = 0; i < ary.length; i++) {
  signCnt += ary[i];
}

const aryCopy = (ary) => {
  const temp = [];
  for (let n of ary) {
    temp.push(n);
  }
  return temp;
};

const calc = (signAry) => {
  let result = numbers[0];
  for (let i = 0; i < signAry.length; i++) {
    const sign = signAry[i];
    result = calcSign[sign](result, numbers[i + 1]);
  }
  return result;
};

const dfs = (depth, signAry) => {
  if (depth === signCnt) {
    const result = calc(signAry);
    if (answer[0] < result) answer[0] = result;
    if (answer[1] > result) answer[1] = result;
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      if (ary[i] === 0) continue;
      const sign = signType[i];
      const newSignAry = aryCopy(signAry);
      newSignAry.push(sign);
      ary[i] -= 1;
      dfs(depth + 1, newSignAry);
      ary[i] += 1;
    }
  }
};

dfs(0, []);

console.log(answer.join("\n"));

// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
//   .toString().trim().split('\n').map(e => e.split(' ').map(Number))

// const N = input.shift()[0];
// const toolNum = N - 1;
// let nums = input.shift();
// let tools = input.shift();
// let max = -Infinity;
// let min = Infinity;
// let visited = [];

// const dfs = (cnt) => {
//   if (cnt === toolNum) {
//     let result = nums[0];
//     for (let i = 0; i < toolNum; i++) {

//       if (visited[i] === '+') result = result + nums[i + 1];
//       else if (visited[i] === '-') result = result - nums[i + 1];
//       else if (visited[i] === '*') result = result * nums[i + 1];
//       else if (visited[i] === '/') {
//         if (result < 0) {
//           result = -1 * Math.floor((result * -1) / nums[i + 1]);
//         }
//         else result = Math.floor(result / nums[i + 1]);
//       }
//     }
//     max = Math.max(max, result);
//     min = Math.min(min, result);
//     return;
//   }
//   else {
//     for (let i = 0; i < 4; i++) {
//       if (tools[i] === 0) continue;

//       if (i === 0) {
//         visited.push('+')
//         tools[i] -= 1;
//       }
//       else if (i === 1) {
//         visited.push('-')
//         tools[i] -= 1;
//       }
//       else if (i === 2) {
//         visited.push('*')
//         tools[i] -= 1;
//       }
//       else if (i === 3) {
//         visited.push('/')
//         tools[i] -= 1;
//       }
//       dfs(cnt + 1);
//       visited.pop();
//       tools[i] += 1;
//     }
//   }
// };
// dfs(0);
// console.log(`${max}\n${min}`);
