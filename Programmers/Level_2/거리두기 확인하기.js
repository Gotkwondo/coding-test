const solution = (places) => {
  const answer = Array.from({ length: 5 }, () => 1);
  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (let i = 0; i < 5; i++) {
    const room = places[i].map(e => e.split(''));
    let flag = false
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (room[j][k] === "P") {
          dir.forEach(d => {
            if (room[j + d[0]]?.[k + d[1]] === 'P') {
              answer[i] = 0;
              flag = true;
            }
          })
        }
        else if (room[j][k] === "O") {
          if (dir.filter(([y, x]) => room[j + y]?.[k + x] === 'P').length >= 2) {
            answer[i] = 0;
            flag = true;
          }
        }
        if (flag) break;
      }
      if (flag) break;
    }
  }
  return answer;
}