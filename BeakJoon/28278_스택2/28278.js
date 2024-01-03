const path = __dirname + '/example.txt' // /dev/stdin
let [N, ...input] = require('fs').readFileSync(path).toString().trim().split('\n').map(e => e.replace('\r', ''));

let stack = [];
let answer = [];

input.forEach(e => {
  let arr = e;
  // 이 문제에서는 여기가 중점이다. 1일때 다음 값을 어떻게 가져오는냐
  let [n, v] = arr.split(' ');
  switch (n) {
    case '1':
      stack.push(v);
      break;
    case '2':
      answer.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case '3':
      answer.push(stack.length);
      break;
    case "4":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case '5':
      answer.push(stack.length > 0 ? stack[stack.length - 1] : -1);
  }
});

console.log(answer.join('\n'));