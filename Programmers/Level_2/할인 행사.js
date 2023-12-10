const solution = (want, number, discount) => {
  // let answer = 0;
  // const check = (arr) => {
  //     let map = new Map();
  //     arr.forEach((e) => {
  //         map.set(e, (map.get(e) || 0) + 1);
  //     })
  //     for(let i=0; i<want.length; i++){
  //         if(map.get(want[i]) !== number[i]) return false;
  //     }
  //     return true;
  // }
  // for(let i=0; i<discount.length-9; i++){
  //     const arr = discount.slice(i, i+10);
  //     if(check(arr)){
  //         answer += 1;
  //     }
  // }
  // return answer;
  let answer = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const arr = discount.slice(i, i + 10);
    let map = new Map();
    arr.forEach((e) => {
      map.set(e, (map.get(e) || 0) + 1);
    })
    for (let j = 0; j < want.length; j++) {
      if (map.get(want[j]) !== number[j]) {
        answer -= 1;
        break;
      }
    }
    answer += 1;
  }
  return answer;
}