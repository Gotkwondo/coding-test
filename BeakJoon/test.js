const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

// n = 가로 세로 길이, m = 치킨집의 최대 갯수
const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((e) => e.split(" ").map(Number));
const houses = [];
const chickens = [];
const chickenCheck = [];
let answer = Infinity;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) houses.push([i, j]);
    else if (map[i][j] === 2) {
      chickens.push([i, j]);
      chickenCheck.push(false);
    }
  }
}

const calcDistance = ([cy, cx], [hy, hx]) => {
  return Math.abs(cy - hy) + Math.abs(cx - hx);
};

const dfs = (depth, index) => {
  if (depth === m) {
    let sum = 0;
    for (let house of houses) {
      let min = Infinity;
      for (let c = 0; c < chickenCheck.length; c++) {
        if (!chickenCheck[c]) continue; 
        const chicken = chickens[c];
        const distance = calcDistance(chicken, house);
        if (distance < min) min = distance;
      }
      sum += min;
    }
    if (answer > sum) answer = sum;
    return;
  }
  for (let i = index; i < chickenCheck.length; i++){
    if (!chickenCheck[i]) {
      chickenCheck[i] = true;
      dfs(depth + 1, i);
      chickenCheck[i] = false;
    }
  }
};

dfs(0, 0);
console.log(answer)