const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e);

const n = input.shift();
const arr = input[0].split(' ').map(Number);
const answer = Array.from({ length: n }, () => 0);
const stack = [];

for (let i = 0; i < arr.length; i++) {
  const tower = [arr[i], i + 1];

  if (!stack.length) {
    stack.push(tower);
  }
  else {
    if (stack[stack.length - 1][0] < tower[0]) {
      while (stack.length) {
        if (stack[stack.length - 1][0] >= tower[0]) break;
        else stack.pop();
      }
      answer[i] = stack.length ? stack[stack.length - 1][1] : 0;
      stack.push(tower);
    }
    else {
      answer[i] = stack.length ? stack[stack.length - 1][1] : 0;
      stack.push(tower);
    }
  }
}

console.log(answer.join(' '));