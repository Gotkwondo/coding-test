function solution(storage, requests) {
  const [n, m] = [storage.length, storage[0].length];
  let answer = 0;
  let double = new Set();
  let map = Array.from({ length: n + 2 }, () => Array.from({ length: m + 2 }, () => -1));
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
    
  for (let i = 0; i < storage.length; i++) {
    for (let j = 0; j < storage[i].length; j++) {
      map[i + 1][j + 1] = storage[i][j];
    }
  }
    
  for (let req of requests) {
    // 지게차 작업
    if (req.length === 1) {
      if (double.has(req)) continue;
      let visited = new Set();
      let que = [[0, 0]];
      visited.add('0, 0', true);
            
      while (que.length > 0) {
        const [x, y] = que.shift();
        for (let [dx, dy] of dir) {
          const [nx, ny] = [x + dx, y + dy];
          if (nx >= 0 && nx < n + 2 && ny >= 0 && ny < m + 2 && !visited.has(`${nx}, ${ny}`)) {
            if (map[nx][ny] === -1) que.push([nx, ny]);
            else if (map[nx][ny] === req) map[nx][ny] = -1;
            else if (map[nx][ny] === 0) {
              que.push([nx, ny]);
              map[nx][ny] = -1;
            }
            visited.add(`${nx}, ${ny}`, true);
          }
        }
      }
    }
        
    // 크레인 작업
    else {
      double.add(req[0], true);
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
          if (map[i][j] === req[0]) {
            if (dir.some(([x, y]) => map[i + x][j + y] === -1)) {
              map[i][j] = -1;
            } else map[i][j] = 0;
          }
        }
      }
    }
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (map[i][j] !== 0 && map[i][j] !== -1) answer++;
    }
  }
  return answer;
}