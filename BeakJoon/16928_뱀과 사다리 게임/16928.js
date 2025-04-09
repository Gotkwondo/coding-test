const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [l, s] = input.shift().split(" ").map(Number);
let map = Array.from({ length: 101 }, () => 0);
let road = new Map();
let que = [1];

for (let st of input) {
  const [s, e] = st.split(" ").map(Number);
  road.set(s, e);
}

while (que.length > 0) {
  const cur = que.shift();

  if (cur === 100) {
    console.log(map[cur]);
    break;
  }

  if (road.has(cur)) {
    const nextCur = road.get(cur);
    if (map[nextCur] === 0 || map[nextCur] > map[cur]) {
      map[nextCur] = map[cur];
      que.push(nextCur);
    }
  } else {
    for (let i = 1; i <= 6; i++) {
      const nextCur = cur + i;
      if (map[nextCur] === 0 || map[nextCur] > map[cur] + 1) {
        map[nextCur] = map[cur] + 1;
        que.push(nextCur);
      }
    }
  }
}
