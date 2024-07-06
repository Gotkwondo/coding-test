const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const dir = [[-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1]];
let map = Array.from({ length: 4 }, () => Array(4).fill(null));
const pos = Array.from({ length: 17 }, () => null);
let answer = 0;

for (let i = 0; i < 4; i++){
  for (let j = 0; j < 8; j += 2){
    map[i][j / 2] = [input[i][j], input[i][j + 1]];
    pos[input[i][j]] = [i, j / 2];
  }
}

const curShark = {
  x: 0,
  y: 0,
  dir: map[0][0][1],
  eat: map[0][0][0]
};
pos[map[0][0][0]] = null;
map[0][0] = 'S';


const moveFish = (fish, map) => {
  fish.forEach((e, i) => {
    if (e) {
      const [fx, fy] = e;
    const [fn, fd] = map[fx][fy];

    for (let j = 0; j < 8; j++) {
      const nextDir = (fd + j) % 8;
      const nx = fx + dir[nextDir][0];
      const ny = fy + dir[nextDir][1];

      if (nx >= 0 && nx < 4 && ny >= 0 && ny < 4 && map[nx][ny] !== 'S') {
        map[fx][fy] = 0;
        if (map[nx][ny] === 0) {
          fish[i] = [nx, ny];
          map[nx][ny] = [fn, nextDir];
        }
        else {
          const [nFishN, nFishD] = map[nx][ny];
          fish[nFishN] = [fx, fy];
          map[fx][fy] = [nFishN, nFishD];
          fish[i] = [nx, ny];
          map[nx][ny] = [fn, nextDir];
        }
        break;
      }
    }
    }  
  })
};

const copyMapArr = (arr) => {
  const temp = Array.from({ length: 4 }, () => Array(4));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      temp[i][j] = arr[i][j];
    }
  }
  return temp;
};

const copyFishArr = (arr) => {
  const temp = Array.from({ length: 17 });
  for (let i = 0; i < 17; i++) {
    if (i === 0 || arr[i] === null) temp[i] = null;
    else temp[i] = [arr[i][0], arr[i][1]];
  }
  return temp;
};

const dfs = (mapArr, shark, fish) => {
  
  if (shark.eat > answer) answer = shark.eat;

  moveFish(fish, mapArr);
  for (let i = 1; i < 4; i++) {
    const snx = shark.x + (dir[shark.dir % 8][0] * i);
    const sny = shark.y + (dir[shark.dir % 8][1] * i);

    if (snx >= 0 && snx < 4 && sny >= 0 && sny < 4 && mapArr[snx][sny] !== 0) {
      const tempMap = copyMapArr(mapArr);
      const tempFish = copyFishArr(fish);
      
      const [fn, fd] = tempMap[snx][sny];
      tempMap[shark.x][shark.y] = 0;
      const newShark = {
        x: snx,
        y: sny,
        dir: fd,
        eat: shark.eat + fn
      };
      tempFish[fn] = null;

      tempMap[snx][sny] = "S";
      dfs(tempMap, newShark, tempFish);
    }
  }
};

dfs(map, curShark, pos);
console.log(answer);