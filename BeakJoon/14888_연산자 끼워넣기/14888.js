const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n').map(e => e.split(' ').map(Number))

const N = input.shift()[0];
const toolNum = N - 1;
let nums = input.shift();
let tools = input.shift();
let max = -Infinity;
let min = Infinity;
let visited = [];

const dfs = (cnt) => {
  if (cnt === toolNum) {
    let result = nums[0];
    for (let i = 0; i < toolNum; i++) {
      
      if (visited[i] === '+') result = result + nums[i + 1];
      else if (visited[i] === '-') result = result - nums[i + 1];
      else if (visited[i] === '*') result = result * nums[i + 1];
      else if (visited[i] === '/') {
        if (result < 0) {
          result = -1 * Math.floor((result * -1) / nums[i + 1]);
        }
        else result = Math.floor(result / nums[i + 1]);
      }
    }
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }
  else {
    for (let i = 0; i < 4; i++) {
      if (tools[i] === 0) continue;

      if (i === 0) {
        visited.push('+')
        tools[i] -= 1;
      }
      else if (i === 1) {
        visited.push('-')
        tools[i] -= 1;
      }
      else if (i === 2) {
        visited.push('*')
        tools[i] -= 1;
      }
      else if (i === 3) {
        visited.push('/')
        tools[i] -= 1;
      }
      dfs(cnt + 1);
      visited.pop();
      tools[i] += 1;
    }
  }
};
dfs(0);
console.log(`${max}\n${min}`);