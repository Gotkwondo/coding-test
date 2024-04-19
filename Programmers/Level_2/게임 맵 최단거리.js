const solution = (maps) => {
  const xL = maps[0].length;
  const yL = maps.length;
  const xMove = [0, 0, -1, 1];
  const yMove = [1, -1, 0, 0];
  let que = [[0, 0, 1]];
    
  while (que.length) {
    const position = que.shift();
    if (position[0] === yL - 1 && position[1] === xL - 1) {
      return position[2];
    }
    for (let i = 0; i < 4; i++) {
      const nX = position[1] + xMove[i];
      const nY = position[0] + yMove[i];
      if (nX >= 0 && nX < xL && nY >= 0 && nY < yL && maps[nY][nX] === 1) {
        que.push([nY, nX, position[2] + 1]);
        maps[nY][nX] = 0;
      }
    }
  }
  return -1;
};