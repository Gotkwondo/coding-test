const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [N, M, y, x, cNum] = input.shift();
let command = input.pop();
let map = input.slice();
let curPos = [y, x];
const dice = {
  up: 0,
  down: 0,
  east: 0,
  west: 0,
  north: 0,
  south: 0,
}
const direction = {
  1: [0, 1],
  2: [0, -1],
  3: [-1, 0],
  4: [1, 0]
};
let answer = '';

const check = (y, x, dir) => {
  if (dir === 1 && x >= 0 && x < M - 1) {
    return true;
  }
  else if (dir === 2 && x > 0 && x < M) {
    return true;
  }
  else if (dir === 3 && y > 0 && y < N) {
    return true;
  }
  else if (dir === 4 && y >= 0 && y < N - 1) {
    return true;
  }
  else return false;
};

const move = (y, x, com) => {
  if (com === 1) {
    let east = dice['east'];
    dice['east'] = dice['up'];
    dice['up'] = dice['west'];
    dice['west'] = dice['down'];
    
    if(map[y][x + 1] === 0){
      dice['down'] = east;
      map[y][x + 1] = east;
    }
    else{
      dice['down'] = map[y][x + 1];
      map[y][x + 1] = 0;
    }
  }
  else if (com === 2) {
    let west = dice['west'];
    dice['west'] = dice['up'];
    dice['up'] = dice['east'];
    dice['east'] = dice['down'];
    if (map[y][x - 1] === 0) {
      dice['down'] = west;
      map[y][x - 1] = west;
    }
    else{
      dice['down'] = map[y][x - 1];
      map[y][x - 1] = 0;
    }
  }
  else if (com === 3) {
    let north = dice['north'];
    dice['north'] = dice['up'];
    dice['up'] = dice['south'];
    dice['south'] = dice['down'];
    if(map[y - 1][x] === 0){
      dice['down'] = north;
      map[y - 1][x] = north;
    }
    else{
      dice['down'] = map[y - 1][x];
      map[y - 1][x] = 0;
    }
  }
  else if (com === 4) {
    let south = dice['south'];
    dice['south'] = dice['up'];
    dice['up'] = dice['north'];
    dice['north'] = dice['down'];
    if(map[y + 1][x] === 0){
      dice['down'] = south;
      map[y + 1][x] = south;
    }
    else{
      dice['down'] = map[y + 1][x];
      map[y + 1][x] = 0;
    }
  }
  return [y + direction[com][0], x + direction[com][1]];
}

for (let i = 0; i < cNum; i++){
  const curCommand = command[i];
  if (curCommand === 1 && check(curPos[0], curPos[1], curCommand)) {
    const newPos = move(curPos[0], curPos[1], curCommand);
    curPos[0] = newPos[0];
    curPos[1] = newPos[1];

    answer += `${dice['up']}\n`;
  }
  else if (curCommand === 2 && check(curPos[0], curPos[1], curCommand)) {
    const newPos = move(curPos[0], curPos[1], curCommand);
    curPos[0] = newPos[0];
    curPos[1] = newPos[1];

    answer += `${dice['up']}\n`;
  }
  else if (curCommand === 3 && check(curPos[0], curPos[1], curCommand)) {
    const newPos = move(curPos[0], curPos[1], curCommand);
    curPos[0] = newPos[0];
    curPos[1] = newPos[1];

    answer += `${dice['up']}\n`;
  }
  else if (curCommand === 4 && check(curPos[0], curPos[1], curCommand)) {
    const newPos = move(curPos[0], curPos[1], curCommand);
    curPos[0] = newPos[0];
    curPos[1] = newPos[1];
    answer += `${dice['up']}\n`;
  }
}

console.log(answer);