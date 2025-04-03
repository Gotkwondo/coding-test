const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [n, m, x, y, k] = input.shift().split(' ').map(Number);
const command = input.pop().split(' ').map(Number);
const map = input.map(e => e.split(' ').map(Number));
let answer = "";
const dice = {
  up: 0,
  down: 0,
  north: 0,
  south: 0,
  east: 0,
  west: 0,
  pos: [x, y]
};

const dir = [null, [0, 1], [0, -1], [-1, 0], [1, 0]];

const check = (command, curX, curY) => {
  const [nextX, nextY] = [curX + dir[command][0], curY + dir[command][1]];
  if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
    return false;
  }
  return true;
};

const roll = {
  1: (curX, curY) => {
    if (check(1, curX, curY)) return;
    else {
      const [nextX, nextY] = [curX + dir[1][0], curY + dir[1][1]];
      dice.pos = [nextX, nextY];

      [dice.up, dice.east, dice.down, dice.west] = [
        dice.west,
        dice.up,
        dice.east,
        dice.down,
      ];

      if(map[nextX][nextY] === 0){
        map[nextX][nextY] = dice.down;
      } else{
        dice.down = map[nextX][nextY];
        map[nextX][nextY] = 0;
      }
      answer += `${dice.up}\n`;
    }
  },
  2: (curX, curY) => {
    if (check(2, curX, curY)) return;
    else {
      const [nextX, nextY] = [curX + dir[2][0], curY + dir[2][1]];
      dice.pos = [nextX, nextY];

      [dice.up, dice.east, dice.down, dice.west] = [
        dice.east,
        dice.down,
        dice.west,
        dice.up,
      ];

      if(map[nextX][nextY] === 0){
        map[nextX][nextY] = dice.down;
      } else{
        dice.down = map[nextX][nextY];
        map[nextX][nextY] = 0;
      }
      answer += `${dice.up}\n`;
    }
  },
  3: (curX, curY) => {
    if (check(3, curX, curY)) return;
    else {
      const [nextX, nextY] = [curX + dir[3][0], curY + dir[3][1]];
      dice.pos = [nextX, nextY];

      [dice.up, dice.south, dice.down, dice.north] = [
        dice.south,
        dice.down,
        dice.north,
        dice.up,
      ];

      if(map[nextX][nextY] === 0){
        map[nextX][nextY] = dice.down;
      } else{
        dice.down = map[nextX][nextY];
        map[nextX][nextY] = 0;
      }
      answer += `${dice.up}\n`;
    }
  },
  4: (curX, curY) => {
    if (check(4, curX, curY)) return;
    else {
      const [nextX, nextY] = [curX + dir[4][0], curY + dir[4][1]];
      dice.pos = [nextX, nextY];

      [dice.up, dice.south, dice.down, dice.north] = [
        dice.north,
        dice.up,
        dice.south,
        dice.down,
      ];

      if(map[nextX][nextY] === 0){
        map[nextX][nextY] = dice.down;
      } else{
        dice.down = map[nextX][nextY];
        map[nextX][nextY] = 0;
      }
      answer += `${dice.up}\n`;
    }
  },
};

for (let i = 0; i < k; i++){
  roll[command[i]](dice.pos[0], dice.pos[1]);
}

console.log(answer)