const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input.map((e, i) => [i, ...e.split(" ").map(Number), 0]);

for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    else if (arr[i][1] < arr[j][1] && arr[i][2] < arr[j][2]) {
      cnt++;
    }
  }
  arr[i][3] = cnt + 1;
}

console.log(arr.map((e) => e[3]).join(" "));
