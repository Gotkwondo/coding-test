const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const c = +input.shift();
const arr = input.map((e) => {
  const temp = e.split(" ").map(Number);
  const t = temp.shift();
  return [t, temp, 0];
});

for (let i = 0; i < c; i++) {
  const tempArr = arr[i][1];
  for (let j = 0; j < tempArr.length; j++) {
    const bigIdx = tempArr.findIndex((e) => e > tempArr[j]);
    if (bigIdx > j || bigIdx === -1) continue;
    const small = tempArr.splice(j, 1);
    arr[i][2] += j - bigIdx;
    tempArr.splice(bigIdx, 0, small[0]);
  }
}
const answer = arr.map(([type, __dirname, cnt]) => `${type} ${cnt}`).join("\n");

console.log(answer);
