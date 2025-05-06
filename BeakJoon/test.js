const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m, k] = input.shift().split(" ").map(Number);
const food = input.slice(0, n).map(e => e.split(' ').map(Number));
const trees = input.slice(n, input.length + 1).map(e => e.split(' ').map(Number));
const map = Array.from({ length: n }, () => Array.from({ length: n }, () => { return { food: 5, tree: [], dead: [] } }));
const dir = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

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
        sum += (Math.floor(d / 2));
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

for (let i = 0; i < k; i++){
  spring();
  summer();
  autumn();
  winter();
}

console.log(map.reduce((acc, cur) => acc + cur.reduce((ac, cu) => ac + cu.tree.length, 0), 0));