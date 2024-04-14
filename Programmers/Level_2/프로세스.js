const solution = (priorities, location) => {
  let arr = priorities.map((e, i) => {
    return {
      idx: i,
      el: e
    }
  });
  let answer = 1;

  while (arr.length) {
    const val = arr.shift();
    if (arr.some(e => e.el > val.el)) {
      arr.push(val);
    }
    else {
      if (val.idx === location) {
        return answer;
      }
      else {
        answer++;
      }
    }
  }
};

// const solution = (priorities, location) => {
//   let priArr = priorities.map((e, i) => [i, e]);
//   let arr = [];
    
//   while (priArr.length > 0) {
//     const prevV = priArr.shift();
//     if (priArr.find(e => e[1] > prevV[1])) {
//       priArr.push(prevV);
//     }
//     else {
//       arr.push(prevV)
//     }
//   }
//   return arr.findIndex((e) => e[0] === location) + 1;
// }