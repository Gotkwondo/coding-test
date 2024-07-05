const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n] = input.shift();
const arr = input.shift();
const temp = Array.from({ length: n }, () => 1);

for (let i = 1; i < arr.length; i++){
  for (let j = 0; j < i; j++){
    if (arr[i] > arr[j] && temp[j] + 1 > temp[i]) {
      temp[i] = temp[j] + 1;
    }
  }
}

console.log(Math.max(...temp))