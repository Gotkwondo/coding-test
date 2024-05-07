const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const [n, h] = input.shift();
let map = input.slice();
let chicken = [];
let home = [];
let check = new Array(chicken.length).fill(false);
let answer = Infinity;


map.forEach((el, idx) => {
  el.forEach((e, i) => {
    if (e === 2) {
      chicken.push([idx, i]);
    }
  })
})

map.forEach((el, idx) => {
  el.forEach((e, i) => {
    if (e === 1) {
      home.push([idx, i]);
    }
  })
})

const dfs = (idx, cnt) => {
  if (cnt === h) {
    const sum = home.reduce((acc, [yH, xH]) => {
      let min = Infinity;
      chicken.forEach((e, i) => {
        if (check[i]) {
          const [yC, xC] = chicken[i]
          min = Math.min(min, Math.abs(yH - yC) + Math.abs(xH - xC));
        }
      })
      return acc + min;
    }, 0);
    answer = Math.min(answer, sum);
    return;
  }
  else{
    for (let i = idx; i < chicken.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      dfs(i, cnt + 1);
      check[i] = false;
    }  
  }
}
dfs(0, 0);

console.log(answer);