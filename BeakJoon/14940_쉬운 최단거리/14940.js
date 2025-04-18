const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((e) => e.split(" ").map(Number));
const result = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => -1)
);
const dir = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

let que = [];
let flag = false;
for (let i = 0; i < n; i++) {
  if (!flag) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        que.push([i, j]);
        result[i][j] = 0;
        flag = true;
        break;
      }
    }
  }
}

while (que.length) {
  const [curY, curX] = que.shift();
  for (let [y, x] of dir) {
    const [ny, nx] = [curY + y, curX + x];
    if (ny >= 0 && ny < n && nx >= 0 && nx < m && map[ny][nx] !== 0) {
      if (result[ny][nx] === -1) {
        result[ny][nx] = result[curY][curX] + 1;
        que.push([ny, nx]);
      } else if (result[ny][nx] > result[curY][curX] + 1) {
        result[ny][nx] = result[curY][curX] + 1;
        que.push([ny, nx]);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) result[i][j] = 0;
  }
}

console.log(result.map((e) => e.join(" ")).join("\n"));