const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n')

const N = +input.shift();
let arr = input.map(e => e.split(' ').map(Number));
let answer = Infinity;
let visited = new Array(N).fill(false);

const dfs = (cnt, join) => {
  if (cnt === N / 2) {
    let aTeam = [];
    let bTeam = [];
    let aScore = 0;
    let bScore = 0;

    for (let i = 0; i < N; i++) {
      if (visited[i]) {
        aTeam.push(i);
      }
      else {
        bTeam.push(i);
      }
    }
    for (let i = 0; i < N / 2; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        aScore += arr[aTeam[i]][aTeam[j]] + arr[aTeam[j]][aTeam[i]];
        bScore += arr[bTeam[i]][bTeam[j]] + arr[bTeam[j]][bTeam[i]];
      }
    }
    answer = Math.min(answer, Math.abs(aScore - bScore));
    return;
  }
  
  for (let i = join; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(cnt + 1, i);
      visited[i] = false;
    }
  }
};
dfs(0,0)

console.log(answer)