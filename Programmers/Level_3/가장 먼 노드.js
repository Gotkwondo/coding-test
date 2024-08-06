// function solution(n, edge) {
//     const arr = Array.from({length: n + 1}, () => 0);
//     let cnt
//     const que = edge.map(e => e.sort()).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
//     while(que.length > 0){
//         const [st, ed] = que.shift();
//         arr[ed] = arr[ed] ? Math.min(arr[ed], arr[st] + 1) : arr[st] + 1;
//     }
//     const max = Math.max(...arr);
    
//     return arr.filter(e => e === max).length;
// }

function solution(n, edge) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const level = Array.from({ length: n + 1 }, () => 0);
  const que = [1];
  visited[1] = true;
    
  while (que.length > 0) {
    const st = que.shift();
    for (let temp of edge) {
      if (temp[0] === st && !visited[temp[1]]) {
        level[temp[1]] = level[st] + 1;
        visited[temp[1]] = true;
        que.push(temp[1]);
      }
      else if (temp[1] === st && !visited[temp[0]]) {
        level[temp[0]] = level[st] + 1;
        visited[temp[0]] = true;
        que.push(temp[0]);
      }
    }
  }
  const max = Math.max(...level);
  return level.filter(e => e === max).length
}