const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.trim())

let map = input.slice();
let answer = '';

const check = (mapIdx) => {
  const len = map[mapIdx].length;
  if (len <= 2) return true;
  let arr = new Array(len - 2).fill(true);
  // 길이
  for (let i = 1; i < len - 1; i++) {
    const set = new Set();
    for (let j = 0; j <= len - i - 1; j++) {
      const st = map[mapIdx][j] + map[mapIdx][j + i];
      if (set.has(st)) {
        arr[i - 1] = false;
        return false;
      }
      set.add(st)
    }
  }
  return arr.some(e => e === true);
};

for (let i = 0; i < map.length - 1; i++){
  if (check(i)) {
    answer += `${map[i]} is surprising.\n`
  }
  else {
    answer += `${map[i]} is NOT surprising.\n`
  }
}

console.log(answer);