const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const N = +input.shift();
let arr = input.shift().split(' ').map(Number);
const [B, C] = input.shift().split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < N; i++){
  const num = arr[i] - B;
  cnt += 1;
  if (num > 0) {
    cnt += Math.ceil(num / C);
  }
}

console.log(cnt);

// const input = require("fs")
//   .readFileSync(
//     process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
//   )
//   .toString()
//   .trim()
//   .split("\n");

// const n = +input.shift();
// const [firstSpec, secondSpec] = input.pop().split(" ").map(Number);
// const rooms = input
//   .pop()
//   .split(" ")
//   .map((e) =>
//     Number(e) > firstSpec ? Math.ceil((Number(e) - firstSpec) / secondSpec) : 0
//   );

// console.log(rooms.reduce((acc, cur) => acc + cur, 0) + n);