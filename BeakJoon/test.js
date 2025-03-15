const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const arr = input.map(e => [...e.split(' ').map(Number), 0]);
let same = 1;

arr.sort((a, b) => {
  if (b[1] > a[1]) return 1;
  else if (b[1] === a[1]) {
    if (b[2] > a[2]) return 1;
    else if (b[2] === a[2]) {
      if (b[3] > a[3]) return 1;
      else if (b[3] === a[3]) return 0;
      else return -1;
    }
    else return -1;
  }
  else return -1;
});

arr[0][4] = 1;
for (let i = 1; i < n; i++){
  if (arr[i - 1][1] === arr[i][1] && arr[i - 1][2] === arr[i][2] && arr[i - 1][3] === arr[i][3]) {
    arr[i][4] = arr[i - 1][4];
    same++;
  } else {
    arr[i][4] = arr[i - 1][4] + same;
    same = 1;
  }
}

console.log(arr.find(e => e[0] === k)[4]);