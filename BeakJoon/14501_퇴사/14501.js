const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const N = +input.shift();
let arr = input.map(e => e.split(' ').map(Number));
let dp = new Array(N).fill(0);

for (let day = 0; day < N; day++){
  const [due, pay] = arr[N - day - 1];
  if (N + 1 >= N - day + due) {
    dp[day] = pay;
    for (let i = 0; i <= day - due; i++){
      dp[day] = Math.max(dp[day], dp[i] + pay)
    }
  }
}

console.log(Math.max(...dp));