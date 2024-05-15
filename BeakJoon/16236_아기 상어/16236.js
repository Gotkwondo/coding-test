const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const n = +input.shift();
let map = input;
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let fishs = [];
const baby = {
  pos: [0, 0],
  eat: 0,
  size: 2
};
let answer = 0;
map.forEach((el, idx) => {
  el.forEach((e, i) => {
    if (e === 9) {
      baby.pos = [idx, i];
      map[idx][i] = 0;
    }
    else if (e !== 9 && e !== 0) {
      fishs.push([idx, i, e]);
    }
  })
})

/**
 * 현재 위치에서 목표 위치까지의 최단 거리 반환
 * @param curPos 
 * @param goalPos 
 */
const bfs = (goals) => {
  let que = [];
  let visited = Array.from(Array(n), () => Array(n).fill(Infinity));
  
  visited[baby.pos[0]][baby.pos[1]] = 0;
  que.push(baby.pos);
  while (que.length > 0) {
    const pos = que.shift();
    for (let i = 0; i < 4; i++){
      const nY = pos[0] + dir[i][0];
      const nX = pos[1] + dir[i][1];
      if (nY < n && nY >= 0 && nX < n && nX >= 0 && map[nY][nX] <= baby.size) {
        if (visited[nY][nX] === Infinity) {
          visited[nY][nX] = visited[pos[0]][pos[1]] + 1;
          que.push([nY, nX]);
        }
        else {
          if (visited[nY][nX] > visited[pos[0]][pos[1]] + 1) {
            visited[nY][nX] = visited[pos[0]][pos[1]] + 1;
            que.push([nY, nX]);
          }
        }
      }
    }
    
  }
  
  return goals.map(e => {
    return [...e, visited[e[0]][e[1]]];
  }).sort((a, b) => {
    if (a[3] === b[3]) {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
    }
    return a[3] - b[3];
  });
}

while (true) {
  let canEat = fishs.filter((e) => e[2] < baby.size);
  if (canEat.length === 0) break;
  else {
    const check = bfs(canEat);
    if (check[0][3] === Infinity) break;
    const curY = baby.pos[0];
    const curX = baby.pos[1];
    const nextPos = check[0];
    fishs = fishs.filter(e => {
      return !(e[0] === nextPos[0] && e[1] === nextPos[1]);
    })
    map[curY][curX] = 0;
    baby.pos = nextPos;
    map[nextPos[0]][nextPos[1]] = 9;
    baby.eat = baby.eat + 1;
    if (baby.eat === baby.size) {
      baby.size = baby.size + 1;
      baby.eat = 0;
    }
    answer += check[0][3];
  }
}
console.log(answer);