const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const [v, e] = input.shift().split(' ').map(Number);
const road = input.map(e => e.split(' ').map(Number));
const village = Array.from({ length: v }, (_, idx) => Array.from({ length: v }, (__, i) => idx === i ? 0 : Infinity));
let answer = Infinity;

for (let i = 0; i < e; i++){
  const [st, ed, val] = road[i];
  village[st - 1][ed - 1] = val;
}

for (let i = 0; i < v; i++){
  for (let j = 0; j < v; j++){
    for (let k = 0; k < v; k++){
      village[j][k] = Math.min(village[j][k], village[j][i] + village[i][k]);
    }
  }
}

for (let i = 0; i < v; i++){
  for (let j = 0; j < v; j++){
    if (i === j) continue;
    if (village[i][j] !== Infinity && village[j][i] !== Infinity) {
      answer = Math.min(village[i][j] + village[j][i], answer);
    }
    
  }
}

console.log(answer === Infinity ? -1 : answer);