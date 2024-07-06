const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' '));

const N = +input.shift()[0];
const apple = +input.shift()[0];
const applePos = input.splice(0, apple).map(e => e.map(Number));
const comNum = +input.shift()[0];
const command = input.map(e => e.map(el => el.trim()));
let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let snake = {
  head: [0, 0],
  tail: [0, 0],
  dirc: 3
}
let route = [];
let time = 0;
let curCommend = command.shift();
let map = Array.from(Array(N), () => Array(N).fill(' '));
applePos.forEach(([y, x]) => {
  map[y-1][x-1] = 'a';
})
map[0][0] = 's';

while (true) {
  const nextPos = [snake.head[0] + direction[snake.dirc][0], snake.head[1] + direction[snake.dirc][1]];
  if (nextPos[0] > N - 1 || nextPos[0] < 0 || nextPos[1] > N - 1 || nextPos[1] < 0 || map[nextPos[0]][nextPos[1]] === 's') {
    break;
  }
  else {
    if (map[nextPos[0]][nextPos[1]] === 'a') {
      snake.head[0] = nextPos[0];
      snake.head[1] = nextPos[1];
      map[nextPos[0]][nextPos[1]] = 's';
      route.push(nextPos);
    }
    else if(map[nextPos[0]][nextPos[1]] === ' '){
      snake.head[0] = nextPos[0];
      snake.head[1] = nextPos[1];
      map[nextPos[0]][nextPos[1]] = 's';
      route.push(nextPos);
      map[snake.tail[0]][snake.tail[1]] = ' ';
      tailPos = route.shift();
      snake.tail[0] = tailPos[0]
      snake.tail[1] = tailPos[1]
    }

    time++;
    if (time == curCommend[0]) {
      if (curCommend[1] === 'D') {
        switch (snake.dirc) {
          case 0:
            snake.dirc = 3;
            break;
          case 1:
            snake.dirc = 2;
            break;
          case 2:
            snake.dirc = 0;
            break;
          case 3:
            snake.dirc = 1;
            break;
        }
      }
      else if (curCommend[1] === 'L') {
        switch (snake.dirc) {
          case 0:
            snake.dirc = 2;
            break;
          case 1:
            snake.dirc = 3;
            break;
          case 2:
            snake.dirc = 1;
            break;
          case 3:
            snake.dirc = 0;
            break;
        }
      }
      if (command.length > 0 && curCommend !== 0) curCommend = command.shift();
      else curCommend = 0;
    }
  }
}

console.log(time + 1);