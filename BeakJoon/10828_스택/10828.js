const filtPath = __dirname + '/example.txt';
let input = require('fs').readFileSync(filtPath, 'utf8').toString().trim().split('\n'); // /dev/stdin

const n = Number(input.shift()); // 전체 명령 수
const arr = input.map((v) => v.split(' ').map(e => e)); // 명령 리스트

let stack = [];
let answer = ""
const order = {
  "push": (num) => {
    stack.push(num);
  },
  "pop": () => {
    answer += (stack.length ? stack.pop() : -1) + '\n';
  },
  "size": () => {
    answer += (stack.length) + '\n';
  },
  "empty": () => {
    answer += (stack.length ? 0 : 1) + '\n';
  },
  "top": () => {
    answer += (stack.length ? stack[stack.length - 1] : -1) + '\n';
  },
};

for (let i = 0; i < n; i++){
  const command = arr[i][0].trim()
  if (arr[i].length > 1 && arr[i][0] === "push") {
    order["push"](arr[i][1]);
  }
  else {
    order[command]();
  }
}

console.log(answer)