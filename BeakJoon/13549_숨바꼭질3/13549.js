const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [st, ed] = input[0].split(" ").map(Number);
let que = [[st, 0]];
let visited = Array.from({ length: 100001 }, () => false);
visited[st] = true;

while (que.length) {
  const [cur, t] = que.shift();

  if (cur === ed) {
    console.log(t);
    break;
  }

  for (let d of [cur * 2, cur - 1, cur + 1]) {
    if (!visited[d] && d >= 0 && d < 100001) {
      visited[d] = true;
      if (d === cur * 2) que.unshift([d, t]);
      else que.push([d, t + 1]);
    }
  }
}
