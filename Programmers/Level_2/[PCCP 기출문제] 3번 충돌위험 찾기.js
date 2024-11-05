function solution(points, routes) {
  let answer = 0;
  const map = new Map();
  const pos = [];
  points.forEach(([y, x], i) => {
    map.set(i + 1, [y, x]);
  });


  routes.forEach((e) => {
    let time = 0;
    let last = [0, 0];

    for (let i = 0; i < e.length - 1; i++) {
      let [sY, sX] = map.get(e[i]);
      let [eY, eX] = map.get(e[i + 1]);

      while (sY !== eY || sX !== eX) {

        if (!pos[time]) pos[time] = {};
        if (!pos[time][sY]) pos[time][sY] = {};
        pos[time][sY][sX] = (pos[time][sY][sX] || 0) + 1;

        if (pos[time][sY][sX] === 2) answer += 1;

        if (sY > eY) sY--;
        else if (sY < eY) sY++;
        else if (sX > eX) sX--;
        else if (sX < eX) sX++;

        last = [sY, sX];
        time++;
      }
    }
    if (!pos[time]) pos[time] = {};
    if (!pos[time][last[0]]) pos[time][last[0]] = {};
    pos[time][last[0]][last[1]] = (pos[time][last[0]][last[1]] || 0) + 1;

    if (pos[time][last[0]][last[1]] === 2) answer += 1;
  })
  return answer;
}