const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, m, h] = input.shift();
const ladder = input;6
const map = Array.from(Array(h + 1), () => Array(n + 1).fill(false));
let answer = Infinity;

ladder.forEach(([y, x]) => {
  map[y][x] = true;
});

const movingCheck = () => {
  for (let i = 1; i <= n; i++){
    let cur = i;
    for (let j = 1; j <= h; j++){
      if (map[j][cur] === true) cur++;
      else if (map[j][cur-1] === true) cur--;
    }
    if (cur !== i) return false;
  }
  return true;
}

const dfs = (y, x, depth) => {
  if (depth > 3) {
    return;
  }
  if (movingCheck()) {
    if (depth < answer) answer = depth;
    return;
  }
  for (let i = y; i <= h; i++) {
    for (let j = 1; j < n; j++) {
      if (map[i][j] || map[i][j - 1] || map[i][j + 1]) continue;
      map[i][j] = true;
      dfs(i, j, depth + 1);
      map[i][j] = false;
    }
  }
};
dfs(1, 1, 0);

console.log(answer === Infinity ? -1 : answer);