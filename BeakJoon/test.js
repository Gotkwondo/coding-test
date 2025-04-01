const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

let answer = 0;
const n = +input.shift();
const appleCnt = +input.shift();
const applePos = [];
for (let i = 0; i < appleCnt; i++){
  applePos.push(input.shift().split(' ').map(Number));
}
const commandCnt = +input.shift();
const command = [];
for (let i = 0; i < commandCnt; i++){
  command.push(input.shift().trim().split(" ").map((e, idx) => idx === 0 ? +e : e));
}
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const cur = {
  head: [0, 0],
  tail: [0, 0],
  dir: 3
};
const map = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (__, idx) => ' '));
for (const [y, x] of applePos) {
  map[y - 1][x - 1] = 'a';
}
const move = [];
let curCommand = command.shift();

map[0][0] = "s";
while (true) {
  const [nextY, nextX] = [
    cur.head[0] + dir[cur.dir][0],
    cur.head[1] + dir[cur.dir][1],
  ];
  if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= n || map[nextY][nextX] === 's') break;
  else if (map[nextY][nextX] === "a") {
    cur.head = [nextY, nextX];
    map[nextY][nextX] = 's';
    move.push([nextY, nextX]);
  } else if (map[nextY][nextX] === " ") {
    cur.head = [nextY, nextX];
    map[nextY][nextX] = 's';
    map[cur.tail[0]][cur.tail[1]] = ' ';
    move.push([nextY, nextX]);
    cur.tail = move.shift();
  }

  answer++;
  if (answer === curCommand[0]) {
    if (curCommand[1] === 'L') {
      switch (cur.dir) {
        case 0:
          cur.dir = 2;
          break;
        case 1:
          cur.dir = 3;
          break;
        case 2:
          cur.dir = 1;
          break;
        case 3:
          cur.dir = 0;
          break;
      }
    } else if (curCommand[1] === 'D') {
      switch (cur.dir) {
        case 0:
          cur.dir = 3;
          break;
        case 1:
          cur.dir = 2;
          break;
        case 2:
          cur.dir = 0;
          break;
        case 3:
          cur.dir = 1;
          break;
      }
    }
    if (command.length > 0) curCommand = command.shift();
    else curCommand = -1;
  }
}

console.log(answer + 1);