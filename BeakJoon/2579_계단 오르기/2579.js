const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => +e);

const y = input.shift();
const map = input;

const dp = Array.from({ length: y }, () => 0);

dp[0] = map[0];
dp[1] = Math.max(map[0] + map[1], map[1]);
dp[2] = Math.max(map[1], map[0]) + map[2];

for (let i = 3; i < y; i++){
  dp[i] = Math.max(dp[i - 3] + map[i - 1], dp[i - 2]) + map[i];
}

console.log(dp[y - 1]);