const solution = (wallpaper) => {
  let [sx, sy, ex, ey] = [-1, -1, -1, -1];
  const xL = wallpaper[0].length;
  const yL = wallpaper.length;

  for (let i = 0; i < yL; i++) {
    for (let j = 0; j < xL; j++) {
      if (wallpaper[i][j] === "#") {
        if (sx === -1 && sy === -1) {
          sx = j;
          sy = i;
        }
        else {
          sx = sx > j ? j : sx;
          sy = sy > i ? i : sy;
        }
        if (ex === -1 && ey === -1) {
          ex = j + 1;
          ey = i + 1;
        }
        else {
          ex = ex < j + 1 ? j + 1 : ex;
          ey = ey < i + 1 ? i + 1 : ey;
        }
      }
    }
  }

  return [sy, sx, ey, ex];
}