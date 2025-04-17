const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.shift().split(" ").map(Number);
const numArr = input[0].split(" ").map(Number);
let [lp, rp] = [0, 0];
let answer = 0;
let map = new Map();

while (lp <= rp) {
  if (!map.has(numArr[rp]) && rp < n) {
    map.set(numArr[rp], 1);
    rp++;
  } else if (map.get(numArr[rp]) < k && rp < n) {
    map.set(numArr[rp], map.get(numArr[rp]) + 1);
    rp += 1;
  } else {
    map.set(numArr[lp], map.get(numArr[lp]) - 1);
    lp++;
  }
  answer = Math.max(rp - lp, answer);
}

console.log(answer);