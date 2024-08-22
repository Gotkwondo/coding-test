function solution(relation) {
  let idxArr = Array.from({ length: relation[0].length }, (v, i) => i);
  let combinationArr = [];
    
  for (let i = 0; i < idxArr.length; i++) {
    combinationArr.push(...makeCombination(i + 1, idxArr));
  }
    
  combinationArr = checkUniq(relation, combinationArr);
  return checkMinimal(combinationArr).length;
}

function makeCombination(num, arr) {
  let result = [];
  if (num === 1) {
    return arr.map(a => [a])
  }
  arr.forEach((fix, i, origin) => {
    const rest = origin.slice(i + 1);
    const combi = makeCombination(num - 1, rest);
    const attach = combi.map((c) => [fix, ...c]);
    result.push(...attach);
  })
  return result;
}

function checkUniq(relation, combination) {
  const result = [];
    
  combination.forEach(comb => {
    let set = new Set();
        
    relation.forEach(e => {
      set.add(comb.map(el => e[el]).join(', '));
    });
        
    if (set.size === relation.length) result.push(comb);
  });
  return result;
}

function checkMinimal(combinations) {
  let result = [];
    
  while (combinations.length) {
    result.push(combinations[0]);
        
    combinations = combinations.reduce((acc, cur) => {
      let notMinimal = combinations[0].every(e => cur.includes(e));
      if (!notMinimal) acc.push(cur);
      return acc;
    }, []);
  }
  return result;
}