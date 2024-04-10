// const solution = (k, tangerine) => {
//   let freq = new Map();
//   let answer = 0;
    
//   tangerine.forEach(e => freq.set(e, (freq.get(e) || 0) + 1));
    
//   const arr = [...freq].sort((a, b) => b[1] - a[1]).map(e => e[1]);
    
//   while (k > 0) {
//     k -= arr.shift();
//     answer++;
//   }
//   return answer
// }

// Map 자료구로를 이용한 풀이
// const solution = (k, tangerine) => {
//   let map = new Map();
//   let answer = 0;
    
//   tangerine.forEach((e) => {
//     if (map.has(e)) {
//       map.set(e, map.get(e) + 1);
//     }
//     else {
//       map.set(e, 1);
//     }
//   })
    
//   const newmap = [...map].sort((a, b) => b[1] - a[1]);
    
//   for (let i = 0; i < newmap.length; i++) {
//     answer++;
//     k -= newmap[i][1];
//     if (k <= 0) {
//       break;
//     }
//   }
//   return answer;
// };

const solution = (k, tangerine) => {
  const obj = {};
  let answer = 0;
    
  tangerine.forEach(e => {
    obj[e] = (obj[e] || 0) + 1;
  })
  const arr = Object.values(obj).sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    answer++;
    k -= arr[i];
    if (k <= 0) break;
  }
  return answer;
};