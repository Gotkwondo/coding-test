const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

let st = input.shift().split("");
let stack = [];
let temp = 1;
let answer = 0;
let flag = true;

for (let i = 0; i < st.length; i++) {
  const s = st[i];
  if (s === "(" || s === "[") {
    stack.push(s);
    temp *= s === "(" ? 2 : 3;
  } else if (s === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      flag = false;
      break;
    } else if (st[i - 1] === "(") {
      answer += temp;
    }
    stack.pop();
    temp /= 2;
  } else if (s === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      flag = false;
      break;
    } else if (st[i - 1] === "[") {
      answer += temp;
    }
    stack.pop();
    temp /= 3;
  }
}
console.log(stack.length > 0 || !flag ? 0 : answer);
