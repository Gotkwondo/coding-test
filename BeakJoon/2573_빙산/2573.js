const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
const map = input.map(e => e.split(' ').map(Number));
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const yL = map.length;
const xL = map[0].length;
let year = 0;

const melt = () => {
  const check = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) continue;
      let cnt = 0;
      for (let [yd, xd] of dir) {
        const [ny, nx] = [i + yd, j + xd];
        if (ny >= 0 && ny < yL && nx >= 0 && nx < xL && map[ny][nx] === 0) {
          cnt += 1;
        }
      }
      check.push([[i, j], cnt]);
    }
  }
  check.forEach(([[y, x], v]) => {
    if (map[y][x] >= v) map[y][x] -= v;
    else map[y][x] = 0;
  });
};

/**
 * bfs 스타일 검증 함수
 */
const linkCheck = (y, x, check) => {
  const que = [[y, x]];
  check.cnt += 1;
  check.map[y][x] = true;

  while (que.length) {
    const [i, j] = que.shift();

    for (let [yd, xd] of dir) {
      const [ny, nx] = [i + yd, j + xd];
      if (ny >= 0 && ny < yL && nx >= 0 && nx < xL && !check.map[ny][nx] && map[ny][nx] !== 0) {
        que.push([ny, nx]);
        check.map[ny][nx] = true;
      }
    }
  }
};

const isAllMelted = () => {
  return map.every(row => row.every(cell => cell === 0));
};

while (true) {
  const c = {
    cnt: 0,
    map: Array.from({ length: n }, () => Array.from({ length: m }, () => false))
  }
  melt();
  if (isAllMelted()) {
    year = 0;
    break;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] !== 0 && !c.map[i][j]) {
        linkCheck(i, j, c);
      }
    }
  }
  if (c.cnt > 1) {
    year += 1;
    break;
  }
  year += 1;
};

console.log(year > 0 ? year : 0);