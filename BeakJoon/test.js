const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = +input.shift();
const numbers = input.shift().split(' ').map(Number);
const ary = input.shift().split(" ").map(Number);
const signType = ["+", "-", "*", "/"];
const calcSign = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => {
    if((a > 0 && b > 0) || (a < 0 && b < 0)) return Math.floor(Math.abs(a) / Math.abs(b))
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
}

const dfs = (depth, signAry) => {
  if (depth === signCnt) {
    const result = calc(signAry);
    if (answer[0] < result) answer[0] = result;
    if (answer[1] > result) answer[1] = result;
    return;
  }
  else {
    for (let i = 0; i < 4; i++){
      if (ary[i] === 0) continue;
      const sign = signType[i];
      const newSignAry = aryCopy(signAry);
      newSignAry.push(sign);
      ary[i] -= 1;
      dfs(depth + 1, newSignAry);
      ary[i] += 1;
    }
  }
}

dfs(0, []);

console.log(answer.join('\n'))