const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = +input[0];
const table = Array.from({ length: n + 1 }, (_, i) => +input[i]);

const answer = [];
const visited = Array(n + 1).fill(false);
const finished = Array(n + 1).fill(false);

function dfs(start, current) {
  visited[current] = true;
  const next = table[current];

  if (!visited[next]) {
    dfs(start, next);
  } else if (!finished[next]) {
    // 사이클이 형성되었을 경우만 저장
    if (next === start) {
      answer.push(start);
    }
  }

  finished[current] = true;
}

for (let i = 1; i <= n; i++) {
  visited.fill(false);
  finished.fill(false);
  dfs(i, i);
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));