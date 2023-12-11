const solution = (priorities, location) => {
  let priArr = priorities.map((e, i) => [i, e]);
  let arr = [];
    
  while (priArr.length > 0) {
    const prevV = priArr.shift();
    if (priArr.find(e => e[1] > prevV[1])) {
      priArr.push(prevV);
    }
    else {
      arr.push(prevV)
    }
  }
  return arr.findIndex((e) => e[0] === location) + 1;
}