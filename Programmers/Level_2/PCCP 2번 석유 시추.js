const solution = (land) => {
  const que = [];
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const n = land.length;
  const m = land[0].length;
  const vertOil = new Map();
    
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const oilSet = new Set();
      let oilCnt = 0;
            
      if (land[j][i] === 1) {
        que.push([j, i]);
                
        while (que.length) {
          const [cy, cx] = que.shift();
          if (land[cy][cx] === 1) {
            land[cy][cx] = 0;
            oilCnt += 1;
            if (!oilSet.has(cx)) oilSet.add(cx);
                    
            for (let [dy, dx] of dir) {
              const [ny, nx] = [cy + dy, cx + dx];
              if (ny >= 0 && nx >= 0 && ny < n && nx < m && land[ny][nx] === 1) {
                que.push([ny, nx]);
              }
            }
          }
        }
      }
      if (oilCnt !== 0) {
        for (let x of oilSet) {
          vertOil.set(x, vertOil.has(x) ? vertOil.get(x) + oilCnt : oilCnt);
        }
      }
    }
  }
  return Math.max(...vertOil.values());
}