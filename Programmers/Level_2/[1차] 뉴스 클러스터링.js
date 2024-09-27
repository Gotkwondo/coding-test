const makeArr = (arr) => {
  const map = new Map();
  for (let i = 1; i < arr.length; i++) {
    const ja = arr[i - 1] + arr[i];
    if (!/[^a-z]/g.test(ja)) map.has(ja) ? map.set(ja, map.get(ja) + 1) : map.set(ja, 1);
  }
  return map;
};

const solution = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
    
  const map1 = makeArr(str1);
  const map2 = makeArr(str2);
    
  const cnt = [...new Set([...map1.keys(), ...map2.keys()])];
  let union = 0;
  let inter = 0;
    
  cnt.forEach(e => {
    union += Math.max(map1.has(e) ? map1.get(e) : 0, map2.has(e) ? map2.get(e) : 0);
    inter += Math.min(map1.has(e) ? map1.get(e) : 0, map2.has(e) ? map2.get(e) : 0);
  })
    
  return isNaN(inter / union) ? 65536 : Math.floor(inter / union * 65536);
};

// const solution = (str1, str2) => {
//     const change = (str) => {
//         let arr = [];
//         for(let i = 0; i < str.length - 1; i++){
//             if(str[i].match(/[a-z]/) && str[i+1].match(/[a-z]/)) arr.push(str[i]+str[i+1]);
//         }
//         return arr;
//     }
//     let st1 = change(str1.toLowerCase().trim());
//     let st2 = change(str2.toLowerCase().trim());
    
//     const set = new Set([...st1, ...st2]);
//     let union = 0;
//     let inter = 0;
    
//     set.forEach(e => {
//         const has1 = st1.filter(el => el === e).length;
//         const has2 = st2.filter(el => el === e).length;
        
//         union += Math.max(has1, has2);
//         inter += Math.min(has1, has2);
//     })
    
//     if(union === inter) return 65536;
    
//     return Math.floor((inter / union) * 65536);
// }

// const solution = (str1, str2) => {
//   const str1R = makeArr(str1.toLowerCase());
//   const str2R = makeArr(str2.toLowerCase());
    
//   const set = [...new Set([...str1R, ...str2R])];
//   let union = 0;
//   let intersection = 0;
    
//   set.forEach((e) => {
//     const have1 = str1R.filter((el) => el === e).length;
//     const have2 = str2R.filter((el) => el === e).length;
//     union += Math.max(have1, have2);
//     intersection += Math.min(have1, have2);
//   })
//   if (union === intersection) return 65536;
//   else {
//     return Math.floor((intersection / union) * 65536);
//   }
// };

// const makeArr = (str) => {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     const s = str.substr(i, 2);
//     if (s.match(/[a-z]{2}/, 'g')) {
//       arr.push(s);
//     }
//   }
//   return arr;
// };