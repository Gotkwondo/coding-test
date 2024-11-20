const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, m, c] = input.shift().split(' ').map(Number);
const map = input.map(e => e.split(' ').map(Number));
const dice = {
  up: 1,
  right: 3,
  left: 4,
  north: 2,
  south: 5,
  bottom: 6,
  pos: [0, 0]
};
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let fD = 0;
let answer = 0;

for (let i = 0; i < c; i++){
  const [curY, curX] = dice.pos;
  const up = dice.up;
  let [nY, nX] = [curY + dir[fD][0], curX + dir[fD][1]];
  let cnt = 1;

  if (nY < 0 || nY >= n || nX < 0 || nX >= m) {
    fD = (fD + 2) % 4;
  }

  if (fD === 0) {
    dice.up = dice.left;
    dice.left = dice.bottom;
    dice.bottom = dice.right;
    dice.right = up;
  }
  else if (fD === 1) {
    dice.up = dice.north;
    dice.north = dice.bottom;
    dice.bottom = dice.south;
    dice.south = up;
  }
  else if (fD === 2) {
    dice.up = dice.right;
    dice.right = dice.bottom;
    dice.bottom = dice.left;
    dice.left = up;
  }
  else if (fD === 3) {
    dice.up = dice.south;
    dice.south = dice.bottom;
    dice.bottom = dice.north;
    dice.north = up;
  }
  dice.pos = [dice.pos[0] + dir[fD][0], dice.pos[1] + dir[fD][1]];
  const visited = {};
  const que = [[dice.pos[0], dice.pos[1]]];
  visited[`${que[0][0]} ${que[0][1]}`] = true;
  while (que.length > 0) {
    const [y, x] = que.shift();
    for (let j = 0; j < 4; j++){
      const [ny, nx] = [y + dir[j][0], x + dir[j][1]];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m && map[ny][nx] === map[dice.pos[0]][dice.pos[1]] && !visited[`${ny} ${nx}`]) {
        visited[`${ny} ${nx}`] = true;
        que.push([ny, nx]);
        cnt++;
      }
    }
  }
  answer += (cnt * map[dice.pos[0]][dice.pos[1]])


  const [nextY, nextX] = dice.pos;
  if (map[nextY][nextX] < dice.bottom) {
    fD = (fD + 1) % 4;
  }
  else if (map[nextY][nextX] > dice.bottom) {
    fD = (4 + fD - 1) % 4;
  }
}

console.log(answer);