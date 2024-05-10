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