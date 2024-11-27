const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const map = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
const command = [];
const dir = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]];
let cloud = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
let cPos = [[n - 2, 0], [n - 2, 1], [n - 1, 0], [n - 1, 1]];

for (let i = n - 2; i < n; i++){
  for (let j = 0; j < 2; j++){
    cloud[i][j] = true;
  }
}

for (let i = 0; i < n; i++){
  const line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++){
    map[i][j] = line[j];
  }
}

for (let i = n; i < input.length; i++){
  command.push(input[i].split(' ').map(Number));
}

const getPos = (y, x, d, v) => {
  const ymove = d !== 0 && d !== 4 ? v : 0;
  const xmove = d !== 2 && d !== 6 ? v : 0;
  let [ny, nx] = [(y + (dir[d][0] * ymove)) % n, (x + (dir[d][1] * xmove)) % n];
  
  if (ny < 0) ny += n;
  if (nx < 0) nx += n;
  return [ny, nx];
};

const hydration = (arr) => {
  const list = [];
  arr.forEach(([y, x]) => {
    let cnt = 0;
    for (let i = 1; i < 8; i += 2) {
      const [ny, nx] = [y + dir[i][0], x + dir[i][1]];
      if (ny >= 0 && ny < n && nx >= 0 && nx < n && map[ny][nx]) {
        cnt += 1;
      }
    }
    list.push({ pos: [y, x], v: cnt });
  });
  list.forEach(({ pos, v }) => {
    map[pos[0]][pos[1]] += v;
  })
};

const setCloud = (arr) => {
  const newCloud = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  arr.forEach(([y, x]) => newCloud[y][x] = true);
  cloud = newCloud;
}
let limit = 0;
while (command.length) {
  limit += 1;
  const [d, v] = command.shift();
  const cPosL = cPos.length;
  const newCPos = [];
  
  for (let i = 0; i < cPosL; i++){
    const [y, x] = cPos.shift();
    const [ny, nx] = getPos(y, x, d - 1, v);
    cPos.push([ny, nx]);
  }
  setCloud(cPos);

  cPos.forEach(([y, x]) => map[y][x] += 1);
  hydration(cPos);
  
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      if (!cloud[i][j] && map[i][j] >= 2) {
        cloud[i][j] = true;
        map[i][j] -= 2;
        newCPos.push([i, j]);
      }
      else if (cloud[i][j]) {
        cloud[i][j] = false;
      }
    }
  }
  cPos = newCPos;
};

console.log(map.reduce((acc, cur) => acc + cur.reduce((a, c) => a + c, 0), 0));