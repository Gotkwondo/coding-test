const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n, m, t] = input.shift();
let target = input.splice(0, n);
const moves = input.splice(0, t);
const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

for (let i = 0; i < t; i++){
  const [num, d, moveCnt] = moves[i];
  const temp = Array.from(Array(n), () => Array(m).fill(null));
  let isSame = false;

  for (let j = 0; j < n; j++){
    if ((j + 1) % num !== 0) continue;

    if (d === 0) {
      const last = target[j].slice(m-moveCnt);
      const newArr = [...last, ...target[j].slice(0, m - moveCnt)];
      target[j] = newArr;
    }
    if (d === 1) {
      const last = target[j].slice(moveCnt);
      const newArr = [...last, ...target[j].slice(0, moveCnt)];
      target[j] = newArr;
    }
  }

  for (let y = 0; y < n; y++){
    for (let x = 0; x < m; x++){
      if (target[y][x] === 'x') {
        temp[y][x] = 'x';
        continue;
      }
      for (let c = 0; c < 4; c++){
        const nY = y + dir[c][0];
        const nX = (x + dir[c][1]) >= 0 ? x + dir[c][1] : m-1;

        if (nY >= 0 && nY < n && target[y][x] === target[nY][nX]) {
          if (!isSame) isSame = true;
          temp[y][x] = 'x';
          if (temp[nY][nX] !== 'x') temp[nY][nX] = 'x';
        }
      }
      if (temp[y][x] !== 'x') temp[y][x] = target[y][x];
    }
  }
  
  if (!isSame) {
    const numCnt = target.reduce((acc1, cur) => acc1 + cur.reduce((acc2, el) => {
      if (el === 'x') return acc2;
      return acc2 + 1;
    }, 0), 0);

    const avg = target.reduce((acc1, cur) => acc1 + cur.reduce((acc2, el) => {
      if (el === 'x') return acc2;
      return acc2 + el;
    }, 0), 0) / numCnt;
    
    for (let y = 0; y < n; y++){
      for (let x = 0; x < m; x++){
        if(temp[y][x] !== 'x') temp[y][x] += temp[y][x] > avg ? -1 : temp[y][x] < avg ? 1 : 0;
      }
    }
  }
  target = temp;
}
console.log(target.reduce((acc1, cur) => acc1 + cur.reduce((acc2, el) => {
  if (el === 'x') return acc2;
  return acc2 + el;
}, 0), 0));