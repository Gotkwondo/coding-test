const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const n = +input.shift();
const linked = +input.shift();
const arr = input.map(e => e.split(' ').map(Number));
const map = {};
const que = [1];
const check = Array.from({ length: n }, () => false);

arr.forEach(([st, ed], i) => {
  map[st] ? map[st].push(ed) : map[st] = [ed];
  map[ed] ? map[ed].push(st) : map[ed] = [st];
});

while (que.length && linked > 0) {
  const target = que.shift();
  if (!check[target - 1] && map[target]) {
    const list = map[target];
    check[target - 1] = true;
    for (let i = 0; i < list.length; i++){
      que.push(list[i]);
    }
  }
}

const answer = check.filter(e => e === true).length
console.log(answer !== 0 ? answer - 1 : answer);