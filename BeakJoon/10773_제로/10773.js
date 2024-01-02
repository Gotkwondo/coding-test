const path = __dirname + '/example.txt' // /dev/stdin
let input = require('fs').readFileSync(path).toString().trim().split('\n').map(e => +e)
const n = input.splice(0, 1);
let stack = Array(n[0]);
// console.log(stack)
input.forEach(e => {
  if (e === 0) {
    stack.pop();
  }
  else {
    stack.push(e);
  }
})

console.log(stack.reduce((acc, cur) => acc + cur, 0))