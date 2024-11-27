const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const n = +input.shift();
const linked = +input.shift();
const arr = input.map(e => e.split(' ').map(Number));
const map = {};
let answer = 0;
const check = Array.from({ length: n }, () => false);

for (let i = 0; i < arr.length; i++){
  const [st, ed] = arr[i];
  map[st] ? map[st].push(ed) : map[st] = [ed];
  map[ed] ? map[ed].push(st) : map[ed] = [st];
}

const dfs = (target) => {
  if (check[target - 1] || !map[target]) {
    return;
  }
  const list = map[target];
  check[target - 1] = true;
  for (let i = 0; i < list.length; i++){
    dfs(list[i]);
  }
}

dfs(1)
answer = check.filter(e => e === true).length
console.log(answer > 0 ? answer - 1 : 0);