const solution = (line) => {
  const spot = [];
  let [maxX, minX] = [0, 0];
  let [maxY, minY] = [0, 0];

  for (let i = 0; i < line.length - 1; i++) {
    const [a, b, e] = line[i];
    for (let j = i + 1; j < line.length; j++) {
      const [c, d, f] = line[j];
      if ((a * d) - (b * c) === 0) continue;

      const x = ((b * f) - (e * d)) / ((a * d) - (b * c));
      const y = ((e * c) - (a * f)) / ((a * d) - (b * c));

      if (Number.isInteger(x) && Number.isInteger(y)) {
        spot.push([x, y]);
      }
    }
  }

  spot.sort((a, b) => b[0] - a[0]);
  [maxX, minX] = [spot[0][0], spot[spot.length - 1][0]];
  spot.sort((a, b) => b[1] - a[1]);
  [maxY, minY] = [spot[0][1], spot[spot.length - 1][1]];

  const map = Array.from({ length: maxY - minY + 1 }, () => Array.from({ length: maxX - minX + 1 }, () => '.'));

  spot.forEach(([x, y]) => {
    map[y - minY][x - minX] = "*"
  })
  return map.map(e => e.join('')).reverse();
}