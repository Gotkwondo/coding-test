const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, ...number] = input.map(Number);
const answer = [];

const dfs = (start, current, visited, finished) => {
  visited[current] = true;
  const next = number[current - 1];

  if (visited[next] === false) {
    dfs(start, next, visited, finished);
  } else if (finished[next] === false) {
    if (start === next) {
      answer.push(next)
    }
  }
}

for (let i = 1; i <= n; i++){
  const visited = Array.from({ length: n + 1 }, () => false);
  const finished = Array.from({ length: n + 1 }, () => false);
  dfs(i, i, visited, finished);
}

console.log(`${answer.length}\n${answer.join('\n')}`);