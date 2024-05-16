const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, m, k] = input.shift();
let plusHp = input.splice(0, n);
let trees = input.map(e => [...e, 0]);
let map = Array.from(Array(n), () => Array(n).fill(5));
const dir = [
  [-1, -1], [0, -1], [1, -1], [1, 0],
  [1, 1], [0, 1], [-1, 1], [-1, 0]
];

const spring = () => {
  trees = trees.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < trees.length; i++){
    const [x, y, age] = trees[i];
    if (map[x - 1][y - 1] >= age) {
      map[x - 1][y - 1] -= age;
      trees[i][2] += 1;
    }
    else {
      trees[i][3] = -1;
    }
  }
  
}

const summer = () => {
  trees = trees.filter(e => {
    if (e[3] === 0) return true;
    else {
      const [x, y, age, _] = e;
      map[x - 1][y - 1] += Math.floor(age / 2);
      return false;
    }
  });
}

const automn = () => {
  trees.forEach(e => {
    const [x, y, age, _] = e;
    if (age % 5 === 0) {
      for (let i = 0; i < 8; i++) {
        const nY = y - 1 + dir[i][1];
        const nX = x - 1 + dir[i][0];
        if (nY >= 0 && nY < n && nX >= 0 && nX < n) {
          trees.push([nX + 1, nY + 1, 1, 0]);
        }
      }
    }
  })
}

const winter = () => {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      map[i][j] += plusHp[i][j];
    }
  }
}

for (let i = 0; i < k; i++){
  spring();
  summer();
  automn();
  winter();
}
console.log(trees.length);