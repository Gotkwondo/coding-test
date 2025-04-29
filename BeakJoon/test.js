const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());
let answer = [];

for (let line of input) {
  if (line === "end") break;
  const l = line.split("");
  let xCnt = 0;
  let oCnt = 0;
  let dCnt = 0;
  const goal = {
    X: 0,
    O: 0,
  };
  for (let i = 0; i < 9; i++) {
    if (l[i] === "X") xCnt += 1;
    else if (l[i] === "O") oCnt += 1;
    else dCnt += 1;
  }

  if (oCnt > xCnt || xCnt - 1 > oCnt) {
    answer.push("invalid");
    continue;
  }

  for (let i = 0; i < 3; i++) {
    if (
      l[i * 3] === l[i * 3 + 1] &&
      l[i * 3] === l[i * 3 + 2] &&
      l[i * 3] !== "."
    ) {
      goal[l[i * 3]] += 1;
    }
    if (l[i] === l[i + 3] && l[i] === l[i + 6] && l[i] !== ".") {
      goal[l[i]] += 1;
    }
  }
  if (l[0] === l[4] && l[4] === l[8] && l[4] !== ".") {
    goal[l[4]] += 1;
  }
  if (l[2] === l[4] && l[4] === l[6] && l[4] !== ".") {
    goal[l[4]] += 1;
  }

  if (goal.O && goal.X) {
    answer.push("invalid");
    continue;
  } else if (goal.X && xCnt !== oCnt + 1) {
    answer.push("invalid");
    continue;
  } else if (goal.O && xCnt !== oCnt) {
    answer.push("invalid");
    continue;
  } else if (goal.O === 0 && goal.X === 0) {
    answer.push(dCnt ? "invalid" : "valid");
    continue;
  } else {
    answer.push("valid");
  }
}
console.log(answer.join("\n"));
