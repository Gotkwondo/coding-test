const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(' ');
const map = input.map(line => line.split(' '));
const cam = [];
let zero = 0;
for (let i = 0; i < n; i++){
  for (let j = 0; j < m; j++){
    if (map[i][j] === '0') zero += 1;
    else if (map[i][j] === '6') continue;
    else cam.push([i, j, map[i][j]]);
  }
}
let answer = 0;

const copyMap = (map) => {
  const newMap = Array.from({ length: n }, () => Array.from({ length: m }, () => '0'));
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (map[i][j] === '0') continue;
      else newMap[i][j] = map[i][j];
    }
  }
  return newMap;
}

const search = {
  up: (y, x, checkMap) => {
    let curY = y - 1;
    let cnt = 0;
    while (curY >= 0) {
      if (checkMap[curY][x] === '0') {
        checkMap[curY][x] = '#';
        cnt += 1;
        curY -= 1;
      } else if (checkMap[curY][x] === '6') {
        break;
      } else curY -= 1;
    }
    return cnt;
  },
  right: (y, x, checkMap) => {
    let curX = x + 1;
    let cnt = 0;
    while (curX < m) {
      if (checkMap[y][curX] === '0') {
        checkMap[y][curX] = '#';
        cnt += 1;
        curX += 1;
      } else if (checkMap[y][curX] === '6') {
        break;
      } else curX += 1;
    }
    return cnt;
  },
  left: (y, x, checkMap) => {
    let curX = x - 1;
    let cnt = 0;
    while (curX >= 0) {
      if (checkMap[y][curX] === '0') {
        checkMap[y][curX] = '#';
        cnt += 1;
        curX -= 1;
      } else if (checkMap[y][curX] === '6') {
        break;
      } else curX -= 1;
    }
    return cnt;
  },
  down: (y, x, checkMap) => {
    let curY = y + 1;
    let cnt = 0;
    while (curY < n) {
      if (checkMap[curY][x] === '0') {
        checkMap[curY][x] = '#';
        cnt += 1;
        curY += 1;
      } else if (checkMap[curY][x] === '6') {
        break;
      } else curY += 1;;
    }
    return cnt;
  }
}

const dfs = (cnt, depth, copiedMap) => {
  if (depth === cam.length) {
    answer = Math.max(answer, cnt);
    return;
  }

  const [cy, cx, type] = cam[depth];
  if (type === '1') {
    for (let i = 0; i < 4; i++){
      const newMap = copyMap(copiedMap);
      if (i === 0) {
        let newCnt = search.up(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 1) {
        let newCnt = search.right(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 2) {
        let newCnt = search.down(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 3) {
        let newCnt = search.left(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
    }
  }
  else if (type === '2') {
    for (let i = 0; i < 2; i++){
      const newMap = copyMap(copiedMap);
      if (i === 0) {
        let newCnt = search.up(cy, cx, newMap) + search.down(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 1) {
        let newCnt = search.right(cy, cx, newMap) + search.left(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
    }
  }
  else if (type === '3') {
    for (let i = 0; i < 4; i++){
      const newMap = copyMap(copiedMap);
      if (i === 0) {
        let newCnt = search.up(cy, cx, newMap) + search.right(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 1) {
        let newCnt = search.down(cy, cx, newMap) + search.right(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 2) {
        let newCnt = search.down(cy, cx, newMap) + search.left(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 3) {
        let newCnt = search.up(cy, cx, newMap) + search.left(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
    }
  }
  else if (type === '4') {
    for (let i = 0; i < 4; i++){
      const newMap = copyMap(copiedMap);
      if (i === 0) {
        let newCnt = search.up(cy, cx, newMap) + search.left(cy, cx, newMap) + search.right(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 1) {
        let newCnt = search.up(cy, cx, newMap) + search.right(cy, cx, newMap) + search.down(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 2) {
        let newCnt = search.down(cy, cx, newMap) + search.left(cy, cx, newMap) + search.right(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
      else if (i === 3) {
        let newCnt = search.up(cy, cx, newMap) + search.left(cy, cx, newMap) + search.down(cy, cx, newMap);
        dfs(cnt + newCnt, depth + 1, newMap);
      }
    }
  }
  else if (type === '5') {
    const newMap = copyMap(copiedMap);
    let newCnt = search.up(cy, cx, newMap) + search.left(cy, cx, newMap) + search.down(cy, cx, newMap) + search.right(cy, cx, newMap);
    dfs(cnt + newCnt, depth + 1, newMap);
  }
}

dfs(0, 0, map);

console.log(zero - answer);

// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
//   .toString().trim().split('\n').map(e => e.split(' ').map(Number))

// const [n, m] = input.shift();
// let map = input.slice();
// let zeroCnt = map.reduce((acc, cur) => acc + cur.filter(el => el === 0).length, 0);
// let answer = 0;
// const camPos = [];

// map.forEach((el, idx) => {
//   el.forEach((e, i) => {
//     if (e > 0 && e !== 6) camPos.push([idx, i]);
//   })
// })

// const copyMap = (arr) => {
//   let copied = [];

//   arr.forEach((v) => {
//     copied.push([...v]);
//   });
//   return copied;
// };

// const checkU = (y, x, checkMap) => {
//   let yP = y;
//   let cnt = 0;
//   while (yP > 0) {
//     yP -= 1;
//     if (checkMap[yP][x] === 0) {
//       cnt += 1;
//       checkMap[yP][x] = '#';
//     }
//     else if (checkMap[yP][x] === '#' || (checkMap[yP][x] > 0 && checkMap[yP][x] < 6)) continue;
//     else break;
//   }
//   return cnt;
// }

// const checkL = (y, x, checkMap) => {
//   let xP = x;
//   let cnt = 0;
//   while (xP > 0) {
//     xP -= 1;
//     if (checkMap[y][xP] === 0) {
//       cnt += 1;
//       checkMap[y][xP] = '#';
//     }
//     else if (checkMap[y][xP] === '#' || (checkMap[y][xP] > 0 && checkMap[y][xP] < 6)) continue;
//     else break;
//   }
//   return cnt;
// }

// const checkR = (y, x, checkMap) => {
//   let xP = x;
//   let cnt = 0;
//   while (xP < m - 1) {
//     xP += 1;
//     if (checkMap[y][xP] === 0) {
//       cnt += 1;
//       checkMap[y][xP] = '#';
//     }
//     else if (checkMap[y][xP] === '#' || (checkMap[y][xP] > 0 && checkMap[y][xP] < 6)) continue;
//     else break;
//   }
//   return cnt;
// }

// const checkD = (y, x, checkMap) => {
//   let yP = y
//   let cnt = 0;
//   while (yP < n - 1) {
//     yP += 1;
//     if (checkMap[yP][x] === 0) {
//       cnt += 1;
//       checkMap[yP][x] = '#';
//     }
//     else if (checkMap[yP][x] === '#' || (checkMap[yP][x] > 0 && checkMap[yP][x] < 6)) continue;
//     else break;
//   }
//   return cnt;
// }

// const dfs = (see, cnt, copied) => {
//   if (cnt === camPos.length) {
//     answer = Math.max(answer, see);
//     return;
//   }
//   else {
//     const [y, x] = camPos[cnt];
//     if (map[y][x] === 1) {
//       for (let i = 0; i < 4; i++){
//         const newMap = copyMap(copied);
//         if (i === 0) {
//           const seeCnt = checkU(y, x, newMap);
//           dfs(see + seeCnt, cnt + 1, newMap);
//         }
//         else if (i === 1) {
//           const seeCnt = checkR(y, x, newMap);
//           dfs(see + seeCnt, cnt + 1, newMap);
//         }
//         else if (i === 2) {
//           const seeCnt = checkD(y, x, newMap);
//           dfs(see + seeCnt, cnt + 1, newMap);
//         }
//         else if (i === 3) {
//           const seeCnt = checkL(y, x, newMap);
//           dfs(see + seeCnt, cnt + 1, newMap);
//         }
//       }
//     }
//     else if (map[y][x] === 2) {
//       for (let i = 0; i < 2; i++){
//         const newMap = copyMap(copied);
//         if (i === 0) {
//           const seeCnt1 = checkU(y, x, newMap);
//           const seeCnt2 = checkD(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2, cnt + 1, newMap);
//         }
//         else if (i === 1) {
//           const seeCnt1 = checkL(y, x, newMap);
//           const seeCnt2 = checkR(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2, cnt + 1, newMap);
//         }
//       }
//     }
//     else if (map[y][x] === 3) {
//       for (let i = 0; i < 4; i++){
//         const newMap = copyMap(copied);
//         if (i === 0) {
//           const seeCnt1 = checkU(y, x, newMap);
//           const seeCnt2 = checkR(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2, cnt + 1, newMap);
//         }
//         else if (i === 1) {
//           const seeCnt1 = checkU(y, x, newMap);
//           const seeCnt2 = checkL(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2, cnt + 1, newMap);
//         }
//         else if (i === 2) {
//           const seeCnt1 = checkL(y, x, newMap);
//           const seeCnt2 = checkD(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2, cnt + 1, newMap);
//         }
//         else if (i === 3) {
//           const seeCnt1 = checkR(y, x, newMap);
//           const seeCnt2 = checkD(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2, cnt + 1, newMap);
//         }
//       }
//     }
//     else if (map[y][x] === 4) {
//       for (let i = 0; i < 4; i++){
//         const newMap = copyMap(copied);
//         if (i === 0) {
//           const seeCnt1 = checkU(y, x, newMap);
//           const seeCnt2 = checkR(y, x, newMap);
//           const seeCnt3 = checkL(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2 + seeCnt3, cnt + 1, newMap);
//         }
//         else if (i === 1) {
//           const seeCnt1 = checkU(y, x, newMap);
//           const seeCnt2 = checkD(y, x, newMap);
//           const seeCnt3 = checkL(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2 + seeCnt3, cnt + 1, newMap);
//         }
//         else if (i === 2) {
//           const seeCnt1 = checkD(y, x, newMap);
//           const seeCnt2 = checkR(y, x, newMap);
//           const seeCnt3 = checkL(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2 + seeCnt3, cnt + 1, newMap);
//         }
//         else if (i === 3) {
//           const seeCnt1 = checkU(y, x, newMap);
//           const seeCnt2 = checkR(y, x, newMap);
//           const seeCnt3 = checkD(y, x, newMap);
//           dfs(see + seeCnt1 + seeCnt2 + seeCnt3, cnt + 1, newMap);
//         }
//       }
//     }
//     else if (map[y][x] === 5) {
//       const newMap = copyMap(copied);
//       const seeCnt1 = checkU(y, x, newMap);
//       const seeCnt2 = checkR(y, x, newMap);
//       const seeCnt3 = checkD(y, x, newMap);
//       const seeCnt4 = checkL(y, x, newMap);
//       dfs(see + seeCnt1 + seeCnt2 + seeCnt3 + seeCnt4, cnt + 1, newMap);
//     }
//   }
// }

// dfs(0, 0, map)

// console.log(zeroCnt - answer)