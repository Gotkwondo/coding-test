const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [N, M] = input.shift();
let [y, x, dir] = input.shift();
let map = input.slice();
let answer = 0;
const maxAns = map.map(e => e.filter(el => el === 0).length).reduce((acc, cur) => acc + cur, 0);
const dirArr = [3, 0, 1, 2];

const checkUncleanArea = (y, x) => {
  if ((y > 1 && y <= N - 2 && map[y - 1][x] === 0) ||
    (y >= 1 && y < N - 2 && map[y + 1][x] === 0) ||
    (x > 1 && x <= M - 2  && map[y][x - 1] === 0) ||
    (x >= 1 && x < M - 2 && map[y][x + 1] === 0)
  ) {
    return true;
  }
  return false;
};

const checkCanBack = (y, x, direction) => {
  if (direction === 0 && y < N - 2 && map[y + 1][x] !== 1) {
    return [y + 1, x];
  }
  else if (direction === 1 && x > 1 && map[y][x - 1] !== 1) {
    return [y, x - 1];
  }
  else if (direction === 2 && y > 1 && map[y - 1][x] !== 1) {
    return [y - 1, x];
  }
  else if (direction === 3 && x < M - 2 && map[y][x + 1] !== 1) {
    return [y, x + 1];
  }
  return false;
};

while (true) {
  // 현재 칸이 0(청소하지 않은) 칸인 경우의 동작
  if (map[y][x] === 0) {
    answer += 1;  // 청소를 한 횟수 +1
    map[y][x] = true;  // 청소했다고 표시
    if (maxAns === answer) break; // 최대로 청소할 수 있는 경우 청소기 동작 멈춤
  }
  
  if (checkUncleanArea(y, x)) {
    // 반시계 회전, 앞칸 빈칸 경우, 아닌 경우
    while (true) {
      dir = dirArr[dir];
      if (dir === 0 && map[y - 1][x] === 0) {
        y -= 1;
        break;
      }
      else if (dir === 1 && map[y][x + 1] === 0) {
        x += 1;
        break;
      }
      else if (dir === 2 && map[y + 1][x] === 0) {
        y += 1;
        break;
      }
      else if (dir === 3 && map[y][x - 1] === 0) {
        x -= 1;
        break;
      }
    }
  }
  else {
    // 방향 유지 후진 할 수 있으면 하고, 뒤가 벽이면 끝냄
    const canBack = checkCanBack(y, x, dir);
    if (canBack === false) break;
    y = canBack[0];
    x = canBack[1];
  }
}

console.log(answer);