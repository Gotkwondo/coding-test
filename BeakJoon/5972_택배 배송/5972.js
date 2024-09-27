const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e);

const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(e => e.split(' ').map(Number));
const road = Array.from({ length: n + 1 }, () => []);
const cost = Array.from({ length: n + 1 }, () => Infinity);
const que = [1];

cost[1] = 0;
arr.forEach(([st, ed, co], i) => {
  road[st].push([ed, co]);
  road[ed].push([st, co])
})

while (que.length > 0) {
  const cur = que.shift();
  for (let i = 0; i < road[cur].length; i++) {
    const [ed, co] = road[cur][i];
    if (ed !== 1 && cost[ed] > cost[cur] + co) {
      cost[ed] = cost[cur] + co;
      que.push(ed);
    }
  }
}

console.log(cost[n]);