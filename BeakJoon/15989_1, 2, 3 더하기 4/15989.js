const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = +input.shift();
const arr = input.map(Number);
const max = Math.max(...arr);
const dp = Array.from({ length: max + 1 }, () => 1);
let answer = "";

for (let i = 2; i < dp.length; i++) {
  dp[i] += dp[i - 2];
}
for (let i = 3; i < dp.length; i++) {
  dp[i] += dp[i - 3];
}

for (let t of arr) {
  answer += `${dp[t]}\n`;
}

console.log(answer);