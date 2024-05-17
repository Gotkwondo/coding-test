const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, m, t] = input.shift();
const map = input;
const filterPos = [];
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let answer = 0;
map.forEach((el, idx) => {
  el.forEach((e, i) => {
    if (e === -1) filterPos.push(idx);
  })
})

const spread = (map) => {
  let que = [];
  map.forEach((el, idx) => {
    el.forEach((e, i) => {
      if (e > 0) que.push([idx, i, e]);
    })
  })
  while (que.length > 0) {
    const [y, x, val] = que.shift();
    const spD = Math.floor(val / 5);
    for (let i = 0; i < 4; i++){
      const nY = y + dir[i][0];
      const nX = x + dir[i][1];
      if (nY >= n || nY < 0 || nX >= m || nX < 0 || map[nY][nX] === -1) continue;
      map[nY][nX] += spD;
      map[y][x] -= spD;
    }
  }
}

const spin = (N, direction) => {
  if (direction === 1) {
    for (let i = N + 1; i < n - 1; i++){
      map[i][0] = map[i + 1][0];
    }
    for (let i = 0; i < m - 1; i++){
      map[n - 1][i] = map[n - 1][i + 1];
    }
    for (let i = n - 1; i > N; i--){
      map[i][m - 1] = map[i - 1][m - 1];
    }
    for (let i = m - 1; i > 0; i--){
      if (i === 1) map[N][i] = 0;
      else {
        map[N][i] = map[N][i - 1];
      }
    }
  }
  else if(direction === -1){
    for (let i = N - 1; i > 0; i--){
      map[i][0] = map[i - 1][0];
    }
    for (let i = 0; i < m - 1; i++){
      map[0][i] = map[0][i + 1];
    }
    for (let i = 0; i < N; i++){
      map[i][m - 1] = map[i + 1][m - 1];
    }
    for (let i = m - 1; i > 0; i--){
      if (i === 1) map[N][i] = 0;
      else {
        map[N][i] = map[N][i - 1];
      }
    }
  }
}

for (let i = 0; i < t; i++){
  spread(map);
  spin(filterPos[0], -1);
  spin(filterPos[1], 1);
}
map.forEach(el => {
  el.forEach(e => {
    if (e > 0) answer += e;
  })
})

console.log(answer)