const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number));

const [n] = input.shift();
let arr = input.slice();
let answer = '';

for (let i = 0; i < n; i++){
  const num = arr[i].shift();
  const map = new Map();
  let flag = false;

  arr[i].forEach(e => {
    map.set(e, map.has(e) ? map.get(e) + 1 : 1);
  })

  for (const [key, val] of map) {
    if (val > Math.floor(num / 2)) {
      answer += `${key}\n`;
      flag = true;
      break;
    }
  }
  if(!flag) answer += 'SYJKGW\n';
}

console.log(answer)