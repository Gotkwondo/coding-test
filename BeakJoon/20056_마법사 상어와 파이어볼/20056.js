const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, m, k] = input.shift().map(Number);
const order = input;
const dir = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
let map = Array.from({ length: n }, () => Array.from({ length: n }, () => []));
const newDir1 = [0, 2, 4, 6];
const newDir2 = [1, 3, 5, 7];

for (let i = 0; i < m; i++){
  const [x, y, m, s, d] = order[i];
  map[x - 1][y - 1].push([m, s, d]);
}

const mSum = (arr) => {
  let sum = 0;
  arr.forEach(e => {
    sum += e[0];
  })
  return Math.floor(sum / 5);
};

const sSum = (arr) => {
  let sum = 0;
  arr.forEach(e => {
    sum += e[1];
  })
  return Math.floor(sum / arr.length);
};

const newDir = (dirArr) => {
  const allA = dirArr.every(e => e[2] % 2 === 1);
  const allB = dirArr.every(e => e[2] % 2 === 0);
  return allA || allB ? true : false;
};

const move = (existMap) => {
  const newMap = Array.from({ length: n }, () => Array.from({length: n}, () => []));

  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      if (existMap[i][j].length > 0) {
        existMap[i][j].forEach(e => {
          const [m, s, d] = e;
          const nx = (i + (dir[d][0] * s) % n + n) % n;
          const ny = (j + (dir[d][1] * s) % n + n) % n;
          
          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            newMap[nx][ny].push([m, s, d]);
          }
        })
      }
    }
  }
  
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      if (newMap[i][j].length > 1) {
        const newFireBall = [];
        const newM = mSum(newMap[i][j]);
        const newS = sSum(newMap[i][j]);
        const dir = newDir(newMap[i][j]);

        for (let k = 0; k < 4; k++){
          newFireBall.push([newM, newS, dir ? newDir1[k] : newDir2[k]]);
        }
        newMap[i][j] = newFireBall;
      }
      newMap[i][j] = newMap[i][j].filter(e => e[0] > 0);
    }
  }
  map = newMap;
}
for (let i = 0; i < k; i++){
  move(map);
}

console.log(map.reduce((acc, cur) => {

    return acc + cur.reduce((a, c) => {
      if (c.length === 0) return a;


      return a + c.reduce((ex, ac) => ex + ac[0], 0);
    }, 0);
  
}, 0))