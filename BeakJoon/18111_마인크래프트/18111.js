const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const [N, M, B] = input.shift().split(' ').map(Number);
let arr = input.map(e => e.split(' ').map(Number));
let answer = [Infinity, -1];


for (let h = 0; h <= 256; h++){
  let removed = 0;
  let need = 0;
  for (let i = 0; i < N; i++){
    for (let j = 0; j < M; j++){
      const needBlock = arr[i][j] - h;
      if (needBlock < 0) need -= needBlock;
      else removed += needBlock;
    }
  }
  if (removed + B >= need) {
    const curTime = 2 * removed + need;
    if (curTime <= answer[0]) {
      answer = [curTime, h];
    }
  }
}

console.log(answer.join(' '));