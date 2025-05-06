const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m, k] = input.shift().split(" ").map(Number);
const food = input.slice(0, n).map((e) => e.split(" ").map(Number));
const trees = input
  .slice(n, input.length + 1)
  .map((e) => e.split(" ").map(Number));
const map = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => {
    return { food: 5, tree: [], dead: [] };
  })
);
const dir = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

for (let [y, x, age] of trees) {
  map[y - 1][x - 1].tree.push(age);
}

const spring = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j].tree.sort((a, b) => a - b);
      const newTrees = [];
      for (let k = 0; k < map[i][j].tree.length; k++) {
        const t = map[i][j].tree[k];
        if (map[i][j].food >= t) {
          map[i][j].food -= t;
          newTrees.push(t + 1);
        } else {
          map[i][j].dead.push(t);
        }
      }
      map[i][j].tree = newTrees;
    }
  }
};

const summer = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j].dead.length === 0) continue;
      let sum = 0;
      for (let d of map[i][j].dead) {
        sum += Math.floor(d / 2);
      }
      map[i][j].food += sum;
      map[i][j].dead = [];
    }
  }
};

const autumn = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let t of map[i][j].tree) {
        if (t % 5 === 0) {
          for (let [dy, dx] of dir) {
            const [ny, nx] = [i + dy, j + dx];
            if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
              map[ny][nx].tree.push(1);
            }
          }
        }
      }
    }
  }
};

const winter = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j].food += food[i][j];
    }
  }
};

for (let i = 0; i < k; i++) {
  spring();
  summer();
  autumn();
  winter();
}

console.log(
  map.reduce(
    (acc, cur) => acc + cur.reduce((ac, cu) => ac + cu.tree.length, 0),
    0
  )
);

// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
//   .toString().trim().split('\n').map(e => e.split(' ').map(Number));

// const [n, m, k] = input.shift();
// let plusHp = input.splice(0, n);
// let trees = input.map(e => [...e, 0]);
// let map = Array.from(Array(n), () => Array(n).fill(5));
// const dir = [
//   [-1, -1], [0, -1], [1, -1], [1, 0],
//   [1, 1], [0, 1], [-1, 1], [-1, 0]
// ];

// const spring = () => {
//   trees = trees.sort((a, b) => a[2] - b[2]);
//   for (let i = 0; i < trees.length; i++){
//     const [x, y, age] = trees[i];
//     if (map[x - 1][y - 1] >= age) {
//       map[x - 1][y - 1] -= age;
//       trees[i][2] += 1;
//     }
//     else {
//       trees[i][3] = -1;
//     }
//   }

// }

// const summer = () => {
//   trees = trees.filter(e => {
//     if (e[3] === 0) return true;
//     else {
//       const [x, y, age, _] = e;
//       map[x - 1][y - 1] += Math.floor(age / 2);
//       return false;
//     }
//   });
// }

// const automn = () => {
//   trees.forEach(e => {
//     const [x, y, age, _] = e;
//     if (age % 5 === 0) {
//       for (let i = 0; i < 8; i++) {
//         const nY = y - 1 + dir[i][1];
//         const nX = x - 1 + dir[i][0];
//         if (nY >= 0 && nY < n && nX >= 0 && nX < n) {
//           trees.push([nX + 1, nY + 1, 1, 0]);
//         }
//       }
//     }
//   })
// }

// const winter = () => {
//   for (let i = 0; i < n; i++){
//     for (let j = 0; j < n; j++){
//       map[i][j] += plusHp[i][j];
//     }
//   }
// }

// for (let i = 0; i < k; i++){
//   spring();
//   summer();
//   automn();
//   winter();
// }
// console.log(trees.length);
