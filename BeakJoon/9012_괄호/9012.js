const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const N = input.shift();
let arr = input.map(e => e.trim().split(''));
let answer = '';

for (let i = 0; i < N; i++){
  let stack = [];

  for (let j = 0; j < arr[i].length; j++){
    if (stack.at(-1) === '(' && arr[i][j] === ')') {
      stack.pop();
      continue;
    }
    stack.push(arr[i][j]);
  }
  answer += stack.length === 0 ? 'YES\n' : 'NO\n';
}

console.log(answer)