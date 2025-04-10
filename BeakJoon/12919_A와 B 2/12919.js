const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const s = input.shift();
const t = input.shift().split("");
let answer = 0;

const check = (arr, len) => {
  if (len === s.length) {
    if (arr.join("") === s) answer = 1;
    return;
  } else {
    if (arr[len - 1] === "A") {
      const newArr = [...arr];
      newArr.pop();
      check(newArr, len - 1);
    }
    if (arr[0] === "B") {
      const newArr = [...arr].reverse();
      newArr.pop();
      check(newArr, len - 1);
    }
  }
};
check(t, t.length);
console.log(answer);

// 실패한 코드

// let flag = false;
// const a = (st) => {
//   if (flag || st.length === t.length) {
//     if (st === t) flag = true;
//     return;
//   }
//   a(st + 'A');
//   b(st + 'A');
// }

// const b = (st) => {
//   if (flag || st.length === t.length) {
//     if (st === t) flag = true;
//     return;
//   }
//   const newSt = 'B' + st.split('').reverse().join('');
//   a(newSt);
//   b(newSt);
// }

// a(s);
// b(s);

// console.log(flag ? 1 : 0);
