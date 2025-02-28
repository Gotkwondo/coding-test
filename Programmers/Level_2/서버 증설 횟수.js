function solution(players, m, k) {
  let answer = 0;
  let max = m - 1;
  let que = [];

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    if (que.length && que[0][0] === i) {
      const [t, c] = que.shift();
      max -= c;
    }
    if (max < p) {
      let rent = Math.ceil((p - max) / m);
      que.push([i + k, rent * m]);
      answer += rent;
      max += rent * m;
    }
  }
  return answer;
}
