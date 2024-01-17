const solution = (picks, minerals) => {
  let answer = 0;
  let arr = [...picks];
  let newMinerals = [];
  const obj = [
    { "diamond": 1, "iron": 1, "stone": 1 },
    { "diamond": 5, "iron": 1, "stone": 1 },
    { "diamond": 25, "iron": 5, "stone": 1 },
  ];
    
  const check = (array, word) => {
    return array.filter((e) => e === word).length;
  }
    
  minerals = minerals.slice(0, arr.reduce((acc, cur) => acc + cur, 0) * 5);
    
  for (let i = 0; i < minerals.length; i += 5) {
    newMinerals.push(minerals.slice(i, i + 5));
  }
    
  newMinerals.sort((a, b) => {
    const aDia = check(a, "diamond");
    const bDia = check(b, "diamond");
        
    if (aDia === bDia) {
      const aIron = check(a, "iron");
      const bIron = check(b, "iron");
      return bIron - aIron;
    }
    return bDia - aDia;
  })
    
  let idx = picks[0] ? 0 : (picks[1] ? 1 : 2);
    
  newMinerals.forEach(e => {
    answer += e.reduce((acc, cur) => acc + obj[idx][cur], 0);
    picks[idx]--
    if (picks[idx] === 0) idx++;
  })
    
  return answer;
}