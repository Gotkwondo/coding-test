const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const N = input.shift();
let arr = input.shift().split(' ').map(Number);
let dp1 = new Array(+N).fill(1);
let dp2 = new Array(+N).fill(1);

for (let i = 0; i < N; i++){
  const curN = arr[i];
  for (let j = i - 1; j >= 0; j--){
    const num = arr[j];
    if (num < curN && dp1[j] + 1 > dp1[i]) {
      dp1[i] = dp1[j] + 1;
    }
  }
}

for (let i = N - 1; i >= 0; i--){
  const curN = arr[i];
  for (let j = i + 1; j < N; j++){
    const num = arr[j];
    if (num < curN && dp2[j] + 1 > dp2[i]) {
      dp2[i] = dp2[j] + 1;
    }
  }
}

console.log(Math.max(...dp1.map((e, i) => e + dp2[i])) - 1);