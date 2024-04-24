const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const N = input.shift();
let arr = input.map(e => e.split(' ').map(Number));
let answer = 'Hing';

const dfs = (curY, curX) => {
  const force = arr[curY][curX];
  if (force === -1) answer = 'HaruHaru';
  if (answer === 'HaruHaru') {
    return;
  }
  if (force === 0) return;
  if (curY + arr[curY][curX] < N) {
    dfs(curY + arr[curY][curX], curX);
  }
  if (curX + arr[curY][curX] < N) {
    dfs(curY, curX + arr[curY][curX]);
  }
  return;
}
dfs(0, 0);

console.log(answer);