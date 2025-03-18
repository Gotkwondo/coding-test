const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const m = +input.shift();
const road = Array.from({ length: n }, (_, i) =>
  input[i].split(" ").map(Number)
);
const path = input[n].split(" ").map((e) => +e - 1);
let tripped = Array.from({ length: n }, (_, i) => i);
let answer = "YES";

if (path.length === 1) console.log("YES");
else {
  const find = (parent, x) => {
    if (parent[x] === x) {
      return x;
    }
    return (parent[x] = find(parent, parent[x]));
  };

  const union = (parent, st, ed) => {
    const a = find(parent, st);
    const b = find(parent, ed);
    if (a > b) parent[a] = b;
    else parent[b] = a;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && road[i][j] === 1) union(tripped, i, j);
    }
  }

  for (let i = 0; i < m - 1; i++) {
    if (find(tripped, path[i]) !== find(tripped, path[i + 1])) answer = "NO";
  }
  console.log(answer);
}