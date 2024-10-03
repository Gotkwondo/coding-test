const solution = (orders, course) => {
    let answer = [];
    const obj = {};
    
    course.forEach(cnt => {
        let max = 2;
        obj[cnt] = {};
        
        orders.forEach(menu => {
            const combi = getComb(menu.split(''), cnt);
            
            combi.forEach(e => {
                const st = e.sort().join('');
                obj[cnt][st] ? obj[cnt][st] += 1 : obj[cnt][st] = 1;
            })
        });
        
        max = Math.max(max, ...Object.values(obj[cnt]));
        for(let el in obj[cnt]){
            if(obj[cnt][el] === max) answer.push(el);
        }
    })
    return answer.sort();
}

const getComb = (arr, n) => {
  const result = [];
    
  if (n === 1) return arr.map(e => [e]);
    
  arr.forEach((el, idx, a) => {
    const rest = a.slice(idx + 1);
    const restComb = getComb(rest, n - 1);
    const fix = restComb.map(e => [el, ...e]);
        
    result.push(...fix);
  });
    
  return result;
}