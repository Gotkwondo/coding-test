function solution(m, n, startX, startY, balls) {
  let answer = [];
  const dir = [
    [startX, 2 * n - startY],
    [startX, -startY],
    [-startX, startY],
    [2 * m - startX, startY]
  ];
    
  for (let [cx, cy] of balls) {
    let result = Infinity;
        
    for (let [newx, newy] of dir) {
      if (startX === cx && Math.min(newy, startY) < cy && cy < Math.max(newy, startY)) continue;
      else if (startY === cy && Math.min(newx, startX) < cx && cx < Math.max(newx, startX)) continue;
      else {
        const temp = (newx - cx) ** 2 + (newy - cy) ** 2;
        if (temp < result) result = temp;
      }
    }
    answer.push(result);
  }
    
  return answer;
}