const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [n, m] = input.shift();
let map = input.slice();
let zero = [];
let virus = [];
const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0]
];
let answer = [];

// 빈 공간과 바이러스 공간을 측정
for (let i = 0; i < n; i++){
  for (let j = 0; j < m; j++){
    if (map[i][j] === 0) zero.push([i, j])
    else if(map[i][j] === 2) virus.push([i, j]);
  }
}

// BFS를 이용하기 위해 인접한 빈 공간부터 처리하기 위해
for (let i = 0; i < zero.length; i++){
  for (let j = i + 1; j < zero.length; j++) {
    for (let k = j + 1; k < zero.length; k++) {
      // 깊은 복사로 배열을 복사
      let temp = JSON.parse(JSON.stringify(map));
      const [a, b] = zero[i];
      const [c, d] = zero[j];
      const [e, f] = zero[k];

      // 빈 공간에 벽을 세움
      temp[a][b] = 1;
      temp[c][d] = 1;
      temp[e][f] = 1;

      let vi = 0;
      const tempVirus = JSON.parse(JSON.stringify(virus));

      // 바이러스의 위치를 BFS를 이용해 풀이 진행
      while (tempVirus.length > 0) {
        const [vy, vx] = tempVirus.shift();
        dir.forEach(e => {
          // 상하좌우 방향의 모든 위치를 검증
          const ny = vy + e[0];
          const nx = vx + e[1];
          // 지도의 범위에 있으며 해당 위치가 빈 공간이면 바이러스 확장, 바이러스 수 증가
          if (ny >= 0 && ny < n && nx >= 0 && nx < m && temp[ny][nx] === 0) {
            temp[ny][nx] = 2;
            vi++;
            tempVirus.push([ny, nx]);
          }
        })
      }
      // 각 상황의 빈 공간 수
      answer.push(zero.length - vi - 3);
    }
  }
}

console.log(Math.max(...answer));