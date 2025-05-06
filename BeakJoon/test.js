const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, l, r] = input.shift().split(" ").map(Number);
let map = input.map((e) => e.split(" ").map(Number));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let year = 0;

while (true) {
  const copyMap = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (__, idx) => map[i][idx]));
  const visited = new Set();
  let isUnion = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited.has(`${i}_${j}`)) continue;
      const union = new Set();
      const que = [[i, j]];
      let total = 0;
      while (que.length) {
        const [cy, cx] = que.shift();
        for (const [dy, dx] of dir) {
          const [ny, nx] = [cy + dy, cx + dx];
          if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
            const diff = Math.abs(map[cy][cx] - map[ny][nx]);
            if (diff >= l && diff <= r) {
              if (!union.has(`${cy}_${cx}`) && !visited.has(`${cy}_${cx}`)) {
                union.add(`${cy}_${cx}`);
                visited.add(`${cy}_${cx}`);
                total += map[cy][cx];
              }
              if (!union.has(`${ny}_${nx}`) && !visited.has(`${ny}_${nx}`)) {
                union.add(`${ny}_${nx}`);
                visited.add(`${ny}_${nx}`);
                total += map[ny][nx];
                que.push([ny, nx]);
              }
            }
          }
        }
      }

      if (union.size === 0) continue;
      else {
        union.forEach((value) => {
          const [y, x] = value.split("_").map(Number);
          copyMap[y][x] = Math.floor(total / union.size);
        });
        isUnion = true;
      }
    }
  }
  
  if (!isUnion) break;
  map = copyMap;
  year += 1;
}
console.log(year);