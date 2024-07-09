const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' '));

const [r, c, n] = input.shift().map(Number);
const map = input.map(el => el[0].trim().split(''));
const boom = Array.from({ length: r }, () => Array(c).fill(0));
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let time = 1;

for (let i = 0; i < r; i++){
  for (let j = 0; j < c; j++){
    if (map[i][j] === 'O') boom[i][j] = 3;
  }
}

while (time <= n) {
  if (time % 2 === 0) {
    for (let i = 0; i < r; i++){
      for (let j = 0; j < c; j++){
        if (map[i][j] === '.') {
          map[i][j] = "O";
          boom[i][j] = time + 3;
        }
      }
    }
  }
  else {
    for (let i = 0; i < r; i++){
      for (let j = 0; j < c; j++){
        if (boom[i][j] === time) {
          map[i][j] = '.';

          for (let k = 0; k < 4; k++){
            const nx = i + dir[k][0];
            const ny = j + dir[k][1];
            if (nx >= 0 && nx < r && ny >= 0 && ny < c && map[nx][ny] === "O" && boom[nx][ny] !== time) {
              map[nx][ny] = '.';
              boom[nx][ny] = 0;
            }
          }
        }
      }
    }
  }
  time += 1;
}

console.log(map.reduce((acc, cur) => {
  return acc + cur.reduce((a, c) => a + c, "") + '\n';
}, ""))