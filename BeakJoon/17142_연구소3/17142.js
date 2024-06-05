const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, m] = input.shift();
const map = input.slice();
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const virus = [];
const blank = [];
const active = new Array(m);
let answer = Infinity;

for (let i = 0; i < map.length; i++){
  for (let j = 0; j < map[0].length; j++){
    if (map[i][j] === 2) virus.push([i, j, 0])
    else if (map[i][j] === 0) blank.push([i, j]);
  }
}

const spread = (activePos) => {
  const temp = Array.from({length: n}, () => Array(n).fill(false));
  const que = [...activePos];
  let zeroCnt = blank.length;
  que.forEach(([y, x]) => {
    temp[y][x] = true;
  })
  while (que.length > 0) {
    const [y, x, tCnt] = que.shift();
    for (let i = 0; i < 4; i++){
      const nY = y + dir[i][0];
      const nX = x + dir[i][1];
      if (nY < 0 || nY >= n || nX < 0 || nX >= n) continue;
      else if (temp[nY][nX] || map[nY][nX] === 1) continue;
      
      if (map[nY][nX] === 0) zeroCnt--;
      if (zeroCnt === 0) {
        answer = Math.min(answer, tCnt + 1);
        return;
      }
      
      temp[nY][nX] = true;
      que.push([nY, nX, tCnt + 1]);
    }
  }
}

const dfs = (start, depth) => {
  if (depth === m) {
    spread(active);
    return;
  }
  for (let i = start; i < virus.length; i++){
    active[depth] = virus[i];
    dfs(i + 1, depth + 1);
  }
}

if (blank.length === 0) console.log(0)
else {
  dfs(0, 0);
  console.log(answer === Infinity ? -1 : answer)
}