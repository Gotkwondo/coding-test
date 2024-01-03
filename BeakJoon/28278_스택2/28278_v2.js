const path = __dirname + '/example.txt' // /dev/stdin
let [N, ...input] = require('fs').readFileSync(path).toString().trim().split('\n').map(e => e.replace('\r', ''));

let stack = [];
let answer = ''

const test = {
  '1': (num) => {
    stack.push(num)
  },
  '2': () => {
    answer += `${(stack.length > 0 ? stack.pop() : -1)}\n`
  },
  '3': () => {
    answer += `${(stack.length)}\n`
  },
  '4': () => {
    answer += `${(stack.length  === 0 ? 1 : 0)}\n`
  },
  '5': () => {
    answer += `${(stack.length > 0 ? stack[stack.length - 1] : -1)}\n`
  }
};

input.forEach(e => {
  let arr = e;
  let [n, v] = arr.split(' ');
  if (n === '1') {
    test['1'](v);
  } else if (n) {
    test[n]();
  }
});

console.log(answer)