const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n] = input.shift();
const dragons = input;
const map = Array.from({length: 101}, () => Array(101).fill(false));
const dir = [[1, 0], [0, -1], [-1, 0], [0, 1]];
let answer = 0;

dragons.forEach((e) => {
  const [x, y, direc, gen] = e;
  const arr = [[x, y]];
  let curX = x;
  let curY = y;
  for (let i = 0; i <= gen; i++) {
    if (i === 0) {
      const nX = x + dir[direc][0];
      const nY = y + dir[direc][1];
      map[y][x] = true;
      map[nY][nX] = true;
      arr.push([nX, nY]);
      curX = nX;
      curY = nY;
    }
    else {
      const len = arr.length - 1;
      for (let i = len - 1; i >= 0; i--){
        const [prevX, prevY] = arr[i];
        const nY = prevX - curX + curY;
        const nX = -(prevY - curY) + curX;
        arr.push([nX, nY]);
        map[nY][nX] = true;
      }
      curX = arr[arr.length - 1][0];
      curY = arr[arr.length - 1][1];
    }
  }
})

for (let i = 0; i < 100; i++){
  for (let j = 0; j < 100; j++){
    if (map[i][j] && map[i + 1][j] && map[i][j + 1] && map[i + 1][j + 1]) {
      answer++;
    }
  }
}

console.log(answer)