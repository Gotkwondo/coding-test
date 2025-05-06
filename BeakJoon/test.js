const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m, h] = input.shift().split(' ').map(Number);
const ladders = input.map(e => e.split(' ').map(Number));
const map = Array.from({ length: h + 1 }, () => Array.from({ length: n + 1 }, () => false));
let answer = Infinity;

for (let [a, b] of ladders) {
  map[a][b] = true;
}

const check = () => {
  for (let i = 1; i <= n; i++) {
    let idx = i;
    for (let j = 1; j <= h; j++) {
      if (map[j][idx]) idx++;
      else if (map[j][idx - 1]) idx--;
    }
    if (idx !== i) return false;
  }
  return true;
};

/**
 * @param {number} depth 추가로 설치된 사다리 갯수
 * @param {number} line 현재 사라다리의 깊이(행)
 */
const dfs = (depth, max) => {
  if (answer <= max) return;
  if (max === depth) {
    if (check() && answer > depth) answer = depth;
    return;
  }
  
  for (let j = 1; j < n; j++) {
    // 사다리는 왼쪽에서 오른쪽으로 연결되는 방식으로 놓을 예정이니 n - 1까지 진행
    for (let i = 1; i <= h; i++) {
      if (map[i][j] || map[i][j - 1] || map[i][j + 1]) continue;
      map[i][j] = true;
      dfs(depth + 1, max);
      map[i][j] = false;
      while (i <= h && !map[i][j + 1] && !map[i][j - 1]) i++;
    }
  }
  
};
for (let i = 0; i < 4; i++){
  dfs(0, i);
}
console.log(answer === Infinity ? -1 : answer);