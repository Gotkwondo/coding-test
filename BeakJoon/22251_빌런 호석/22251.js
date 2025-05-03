const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, k, p, x] = input[0].split(' ').map(Number);
const segments = {
  0: [1, 1, 1, 0, 1, 1, 1],
  1: [0, 0, 1, 0, 0, 1, 0],
  2: [1, 0, 1, 1, 1, 0, 1],
  3: [1, 0, 1, 1, 0, 1, 1],
  4: [0, 1, 1, 1, 0, 1, 0],
  5: [1, 1, 0, 1, 0, 1, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 0, 1, 0, 0, 1, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1]
};
let answer = 0;
const len = String(n).length;

const diff = (a, b) => {
  const seg1 = segments[a];
  const seg2 = segments[b];
  let cnt = 0;

  for (let i = 0; i < 7; i++){
    if (seg1[i] !== seg2[i]) cnt += 1;
  }
  return cnt;
}

const toDigits = (num, length) => {
  return String(num).padStart(length, '0').split('').map(Number);
}

for (let floor = 1; floor <= n; floor++){
  if (floor === x) continue;
  const origin = toDigits(x, len);
  const variation = toDigits(floor, len);
  let cnt = 0;
  for (let i = 0; i < len; i++){
    cnt += (diff(origin[i], variation[i]));
    if (cnt > p) break;
  }
  if (cnt <= p) answer += 1;
}
console.log(answer);