const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, min, max] = input.shift();
let map = input.slice();
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

let answer = 0;

const bfs = (y, x, visited) => {
  // 연합을 연결할 수 있는지 확인
  let union = [[y, x]];
  let que = [[y, x]];
  let sum = map[y][x];
  visited[y][x] = true;

  while (que.length > 0) {
    const [cY, cX] = que.shift();
    const cNum = map[cY][cX];

    for (let i = 0; i < 4; i++){
      const [dY, dX] = dir[i];
      const nY = cY + dY;
      const nX = cX + dX;

      if (nY >= n || nY < 0 || nX >= n || nX < 0 || visited[nY][nX]) continue;
      else if (Math.abs(cNum - map[nY][nX]) >= min && Math.abs(cNum - map[nY][nX]) <= max && !visited[nY][nX]) {
        que.push([nY, nX]);
        union.push([nY, nX]);
        sum += map[nY][nX];
        visited[nY][nX] = true;
      }
    }
  }
  if (union.length === 1) return false;
    else {
      const population = Math.floor(sum / union.length);
      union.forEach(e => {
        map[e[0]][e[1]] = population;
      })
      return true;
    }
}
while (true) {
  let visited = Array.from(Array(n), () => Array(n).fill(false));
  let isUnion = false;
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      if (visited[i][j] === false && bfs(i, j, visited)) {
        isUnion = true;
      }
    }
  }
  if (!isUnion) break;
  answer += isUnion ? 1 : 0;
}

console.log(answer)

// const input = require("fs")
//   .readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
//   )
//   .toString()
//   .trim()
//   .split("\n")
//   .map((e) => e.trim());

// const [n, l, r] = input.shift().split(" ").map(Number);
// let map = input.map((e) => e.split(" ").map(Number));
// const dir = [
//   [-1, 0],
//   [1, 0],
//   [0, -1],
//   [0, 1],
// ];
// let year = 0;

// while (true) {
//   const copyMap = Array.from({ length: n }, (_, i) =>
//     Array.from({ length: n }, (__, idx) => map[i][idx])
//   );
//   const visited = new Set();
//   let isUnion = false;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (visited.has(`${i}_${j}`)) continue;
//       const union = new Set();
//       const que = [[i, j]];
//       let total = 0;
//       while (que.length) {
//         const [cy, cx] = que.shift();
//         for (const [dy, dx] of dir) {
//           const [ny, nx] = [cy + dy, cx + dx];
//           if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
//             const diff = Math.abs(map[cy][cx] - map[ny][nx]);
//             if (diff >= l && diff <= r) {
//               if (!union.has(`${cy}_${cx}`) && !visited.has(`${cy}_${cx}`)) {
//                 union.add(`${cy}_${cx}`);
//                 visited.add(`${cy}_${cx}`);
//                 total += map[cy][cx];
//               }
//               if (!union.has(`${ny}_${nx}`) && !visited.has(`${ny}_${nx}`)) {
//                 union.add(`${ny}_${nx}`);
//                 visited.add(`${ny}_${nx}`);
//                 total += map[ny][nx];
//                 que.push([ny, nx]);
//               }
//             }
//           }
//         }
//       }

//       if (union.size === 0) continue;
//       else {
//         union.forEach((value) => {
//           const [y, x] = value.split("_").map(Number);
//           copyMap[y][x] = Math.floor(total / union.size);
//         });
//         isUnion = true;
//       }
//     }
//   }

//   if (!isUnion) break;
//   map = copyMap;
//   year += 1;
// }
// console.log(year);