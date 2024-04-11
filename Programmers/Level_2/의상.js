const solution = (clothes) => {
  const obj = {};
  let answer = 1;
    
  clothes.forEach(e => obj[e[1]] = (obj[e[1]] ? obj[e[1]] : 0) + 1);
  for (const val of Object.values(obj)) {
    answer *= val + 1;
  }
  return answer - 1;
};

// const solution = (clothes) => {
//   return Object.values(
//     clothes.reduce((obj, type) => {
//       obj[type[1]] = obj[type[1]] ? obj[type[1]] + 1 : 1;
//       return obj;
//     }, {})
//   ).reduce((a, b) => a * (b + 1), 1) - 1;
// };