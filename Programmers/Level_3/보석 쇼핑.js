function solution(gems) {
  const size = new Set(gems).size;
  const map = new Map();
  let answer = [1, gems.length];
  let lp = 0;
  let rp = 0;

  map.set(gems[0], 1);
  while (rp < gems.length) {
    if (map.size === size) {
      if (answer[1] - answer[0] > rp - lp) answer = [lp + 1, rp + 1];
      map.set(gems[lp], map.get(gems[lp]) - 1);
      if (map.get(gems[lp]) === 0) map.delete(gems[lp]);
      lp++
    }
    else {
      rp++;
      map.set(gems[rp], map.has(gems[rp]) ? map.get(gems[rp]) + 1 : 1);
    }

  }
  return answer;
// }

// function solution1(gems) {
//   const size = new Set(gems).size;
//   const map = new Map();
//   let answer = [1, gems.length];
    
//   for (let i = 0; i < gems.length; i++) {
//     map.delete(gems[i]);
//     map.set(gems[i], i);
//     if (size === map.size) {
//       const range = [map.values().next().value + 1, i + 1];
//       answer = answer[1] - answer[0] > range[1] - range[0] ? range : answer;
//     }
//   }   
//   return answer;
// }

// function solution2(gems) {
//   const size = new Set(gems).size;
//   const map = new Map();
//   let answer = [1, gems.length];
//   let lp = 0;
//   let rp = 0;
    
//   map.set(gems[0], 1);
    
//   while (rp < gems.length) {
//     if (size === map.size) {
//       if (answer[1] - answer[0] > rp - lp) {
//         answer = [lp + 1, rp + 1];
//       }
            
//       map.set(gems[lp], map.get(gems[lp]) - 1);
//       if (map.get(gems[lp]) === 0) {
//         map.delete(gems[lp]);
//       }
//       lp++;
//     }
//     else {
//       rp++;
//       map.set(gems[rp], map.has(gems[rp]) ? map.get(gems[rp]) + 1 : 1);
//     }
//   }
//   return answer;
// }