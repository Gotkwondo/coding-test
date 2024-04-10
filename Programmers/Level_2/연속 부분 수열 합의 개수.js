const solution = (elements) => {
  const set = new Set();
  const length = elements.length;
    
  for (let width = 1; width <= length; width++) {
    let sum = 0;
    for (let st = 0; st < length; st++) {
      if (st === 0) {
        sum = elements.slice(0, width).reduce((acc, cur) => acc + cur, 0);
      }
      else {
        sum -= elements[st - 1];
        sum += elements[(st + width - 1) % length];
      }
      set.add(sum)
    }
  }
  return set.size;
};
// const solution = (elements) => {
//   const sumSet = new Set();
//   const len = elements.length;
//   for (let i = 1; i <= len; i++) {
//     let sum = 0;
        
//     for (let j = 0; j < len; j++) {
//       if (j === 0) {
//         sum = elements.slice(0, i).reduce((acc, cur) => acc + cur, 0);
//       }
//       else {
//         sum -= elements[j - 1];
//         sum += elements[(j + i - 1) % len];
//       }
//       sumSet.add(sum);
//     }
//   }
//   return sumSet.size;
// }

// const solution = (elements) => {
//   const obj = {};
//   const length = elements.length;
    
//   for (let width = 1; width <= length; width++) {
//     let sum = 0;
//     for (let st = 0; st < length; st++) {
//       if (st === 0) {
//         sum = elements.slice(0, width).reduce((acc, cur) => acc + cur, 0);
//       }
//       else {
//         sum -= elements[st - 1];
//         sum += elements[(st + width - 1) % length];
//       }
//       if (!obj[sum]) obj[sum] = 1;
//     }
//   }
//   return Object.keys(obj).length;
// };