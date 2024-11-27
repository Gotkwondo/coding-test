function solution(enroll, referral, seller, amount) {
  const answer = [];
  const pos = { "-": [] };
  const stack = [['-', null]];
  const visited = { '-': false };
  const m = seller.reduce((acc, cur, idx) => {
    acc[cur] ? acc[cur].push(amount[idx] * 100) : acc[cur] = [amount[idx] * 100];
    return acc;
  }, {})
    
  enroll.forEach(e => visited[e] = false);
    
  referral.forEach((e, i) => {
    const name = enroll[i];
    pos[name] = [];
    pos[e].push(name);
  });
    
  while (stack.length) {
    const [cur, parent] = stack.pop();
    if (visited[cur]) {
      if (m[cur] && cur !== '-') {
        for (let i = 0; i < m[cur].length; i++) {
          const income = Math.floor(m[cur][i] / 10);
          if (income === 0) continue;
          m[cur][i] -= income;
          m[parent] ? m[parent].push(income) : m[parent] = [income];
        }
      }
      continue;
    }
    visited[cur] = true;
    stack.push([cur, parent]);
        
    for (let name of pos[cur]) {
      if (!visited[name]) stack.push([name, cur]);
    }
  }
  return enroll.map(name => m[name] ? m[name].reduce((a, b) => a + b) : 0);
}