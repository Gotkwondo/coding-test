const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [r, c, m] = input.shift();
const sharks = input;
let arr = Array.from({ length: r }, () => Array(c).fill(0));
let answer = 0;

sharks.forEach(([r, c, s, d, z]) => {
  arr[r - 1][c - 1] = [s, d, z];
})

const casting = (curPos) => {
  for (let i = 0; i < r; i++) {
    if (arr[i][curPos] !== 0) {
      const target = arr[i][curPos][2];
      arr[i][curPos] = 0;
      return target;
    }
  }
  return 0;
};

const getNextPos = (y, x, speed, direction) => {
  if (direction === 1 || direction === 2) {
    const cycle = (2 * r) - 2;

    if (direction === 1) {
      speed += 2 * (r - 1) - y;
    }
    else {
      speed += y
    }

    speed %= cycle;
    // cycle로 나눈 나머지가 r 보다 큰 경우는 cycle로 다시 0으로 돌아오지는 않지만, r에서 턴은 한 상태이다.
    if (speed >= r) {
      return [cycle - speed, x, 1];
    }
    else {
      return [speed, x, 2];
    }
  }
  else {
    const cycle = (2 * c) - 2;

    if (direction === 4) {
      speed += 2 * (c - 1) - x;
    }
    else {
      speed += x;
    }

    speed %= cycle;
    if (speed >= c) {
      return [y, cycle - speed, 4];
    }
    else {
      return [y, speed, 3];
    }
  }
}

const move = () => {
  const temp = Array.from({ length: r }, () => Array(c).fill(0));
  
  for (let i = 0; i < r; i++){
    for (let j = 0; j < c; j++){
      if (arr[i][j] !== 0) {
        const [nY, nX, nD] = getNextPos(i, j, arr[i][j][0], arr[i][j][1]);
        if (temp[nY][nX]) {
          temp[nY][nX] = temp[nY][nX][2] < arr[i][j][2] ? [arr[i][j][0], nD, arr[i][j][2]] : temp[nY][nX];
        }
        else {
          temp[nY][nX] = [arr[i][j][0], nD, arr[i][j][2]];
        }
      }
    }
  }
  arr = temp;
}

for (let i = 0; i < c; i++){
  answer += casting(i);
  move();
}

console.log(answer);