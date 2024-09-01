function solution(users, emoticons) {
  let answer = [0, 0];
  const discounts = [10, 20, 30, 40];
  const arr = [];
    
  const dfs = (emos, res) => {
    if (emos.length === 0) {
      arr.push(res);
      return;
    }
    else {
      for (const discount of discounts) {
        dfs(emos.slice(1), [...res, discount]);
      }
    }
  }
  dfs(emoticons, []);
    
  for (const combi of arr) {
    let [plus, total] = [0, 0];
        
    for (const [minPer, maxValue] of users) {
      let cost = 0;
      let flag = false;
      for (let i = 0; i < combi.length; i++) {
        if (minPer > combi[i]) continue;
        cost += emoticons[i] - (emoticons[i] * (combi[i] / 100));
        if (cost >= maxValue) {
          flag = true;
          break;
        }
      }
      flag ? plus++ : total += cost;
    }
        
    if (plus > answer[0] || (plus === answer[0] && total > answer[1])) {
      answer = [plus, total];
    }
  }
    
  return answer;
}