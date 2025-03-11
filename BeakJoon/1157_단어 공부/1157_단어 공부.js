const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const st = input[0].toUpperCase().split("");
let map = new Map();
let answer = [];

for (let s of st) {
  map.set(s, map.has(s) ? map.get(s) + 1 : 1);
}
answer = [...map].sort((a, b) => b[1] - a[1]);

console.log(
  answer.filter((e) => e[1] === answer[0][1]).length > 1 ? "?" : answer[0][0]
);
