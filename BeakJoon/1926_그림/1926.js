const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [y, x] = input.shift();
const map = input;
const check = Array.from({ length: y }, () => Array.from({ length: x }, () => false));
const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]];
let pic = 0;
let maxArea = 0;

for (let i = 0; i < y; i++) {
  for (let j = 0; j < x; j++){
    if (map[i][j] === 1 && !check[i][j]) {
      const que = [[i, j]];
      let area = 0;

      while (que.length > 0) {
        const [cy, cx] = que.shift();
        if (map[cy][cx] === 1) {
          area += 1;
          check[cy][cx] = true;
        }

        for (let k = 0; k < 4; k++){
          const [ny, nx] = [cy + dir[k][0], cx + dir[k][1]];
          if (ny >= 0 && ny < y && nx >= 0 && nx < x && map[ny][nx] === 1 && !check[ny][nx]) {
            que.push([ny, nx]);
            check[ny][nx] = true;
          }
        }
      }
      pic += 1;
      maxArea = Math.max(maxArea, area);
    }
  }
}

console.log(`${pic}\n${maxArea}`);