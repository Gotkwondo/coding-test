// 첫 시도(성공)
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const st = input.shift();
let answer = 0;
let i = 0;

for (i; i < st.length - 2; i++) {
  if (st[i] === "c" && (st[i + 1] === "=" || st[i + 1] === "-")) {
    answer += 1;
    i += 1;
  } else if (st[i] === "d") {
    if (st[i + 1] === "z" && st[i + 2] === "=") {
      answer += 1;
      i += 2;
    } else if (st[i + 1] === "-") {
      answer += 1;
      i += 1;
    } else answer += 1;
  } else if ((st[i] === "l" || st[i] === "n") && st[i + 1] === "j") {
    answer += 1;
    i += 1;
  } else if ((st[i] === "s" || st[i] === "z") && st[i + 1] === "=") {
    answer += 1;
    i += 1;
  } else {
    answer += 1;
  }
}

if (st.length - i === 2) {
  if (st[i] === "c" && (st[i + 1] === "=" || st[i + 1] === "-")) {
    answer += 1;
  } else if (st[i] === "d") {
    if (st[i + 1] === "-") {
      answer += 1;
    } else answer += 2;
  } else if ((st[i] === "l" || st[i] === "n") && st[i + 1] === "j") {
    answer += 1;
  } else if ((st[i] === "s" || st[i] === "z") && st[i + 1] === "=") {
    answer += 1;
  } else {
    answer += 2;
  }
} else if (st.length - i === 1) {
  answer += 1;
}

console.log(answer);

// 두 번째
// const input = require("fs")
//   .readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
//   )
//   .toString()
//   .trim()
//   .split("\n");

// let st = input.shift();
// const list = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// for (let cro of list) {
//   st = st.replaceAll(cro, "q");
// }

// console.log(st.length);