const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const [N, W, L] = input.shift().split(' ').map(Number);
let arr = input[0].split(' ').map(Number)

let que = [[1 + W, arr[0]]];
let weight = arr.shift();
let time = 1;

while (que.length) {
  time += 1;
  if (que[0][0] === time) {
    const finished = que.shift();
    weight -= finished[1];
  }
  if (arr[0] && que.length + 1 <= W && weight + arr[0] <= L && que.length + 1 <= N) {
    const newTruck = arr.shift();
    weight += newTruck;
    que.push([time + W, newTruck]);
  }
}

console.log(time);