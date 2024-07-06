const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, k] = input.shift();
const map = input.splice(0, n).map(e => e.map(el => { return { color: el, stack: [] } })); // 이렇게 사용할 수 있구만
const cars = input.map(([y, x, d], idx) => {
  map[y - 1][x - 1].stack.push(idx);
  return [y - 1, x - 1, d - 1];
});

const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
const revDir = [1,0,3,2];
let answer = 1;
let flag = false;

while (answer <= 1000) {
  for (let i = 0; i < cars.length; i++){
    let [y, x, d] = cars[i];
    let nY = y + dir[d][0];
    let nX = x + dir[d][1];

    if (nY >= n || nY < 0 || nX >= n || nX < 0 || (nY >= 0 && nY < n && nX >= 0 && nX < n && map[nY][nX].color === 2)) {
      cars[i] = [y, x, revDir[d]];
      const bY = y + dir[revDir[d]][0];
      const bX = x + dir[revDir[d]][1];

      if (bY >= 0 && bY < n && bX >= 0 && bX < n && map[bY][bX].color !== 2) {
        i--;
      }
    }
    else if (map[nY][nX].color === 0) {
      const curPlace = map[y][x].stack.indexOf(i);
      const tower = map[y][x].stack.splice(curPlace);
      map[nY][nX].stack.push(...tower);
      tower.forEach(e => {
        cars[e][0] = nY;
        cars[e][1] = nX;
      });
      if (map[nY][nX].stack.length >= 4) {
        flag = true;
      }
    }
    else if (map[nY][nX].color === 1) {
      const curPlace = map[y][x].stack.indexOf(i);
      const tower = map[y][x].stack.splice(curPlace);
      const reverseTower = tower.reverse();
      map[nY][nX].stack.push(...reverseTower);
      tower.forEach(e => {
        cars[e][0] = nY;
        cars[e][1] = nX;
      });
      if (map[nY][nX].stack.length >= 4) {
        flag = true;
      }
    }
    if (flag) break;
  }
  if (flag) break;
  answer += 1;
}

console.log(answer > 1000 ? -1 : answer);