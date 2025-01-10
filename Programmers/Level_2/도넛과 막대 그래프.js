function solution(edges) {
  let answer = [0, 0, 0, 0];
  const arr = [];
  const set = new Set();
    
  for (let [st, ed] of edges) {
    if (!set.has(st)) {
      set.add(st)
    }
    if (!set.has(ed)) {
      set.add(ed)
    }
        
    if (!arr[st]) {
      arr[st] = { out: 0, in: 0 }
      arr[st].out += 1;
      if (!arr[ed]) arr[ed] = { out: 0, in: 0 }
      arr[ed].in += 1;
    }
    else {
      arr[st].out += 1;
      if (!arr[ed]) arr[ed] = { out: 0, in: 0 }
      arr[ed].in += 1;
    }
    if (!arr[ed]) arr[ed] = { out: 0, in: 0 }
  }
    
  // for(let i = 1; i < arr.length; i++){
  //     if(arr[i].out === 1) continue;
  //     if(arr[i].out === 0) answer[2] += 1;
  //     else if(arr[i].out >= 2){
  //         if(arr[i].in === 0){
  //             answer[0] = i;
  //         }
  //         else{
  //             answer[3] += 1;
  //         }
  //     }
  // }
  for (let edge of [...set]) {
    if (arr[edge].out === 1) continue;
    if (arr[edge].out === 0) answer[2] += 1;
    else if (arr[edge].out >= 2) {
      if (arr[edge].in === 0) {
        answer[0] = edge;
      }
      else {
        answer[3] += 1;
      }
    }
  }
    
  answer[1] = arr[answer[0]].out - answer[2] - answer[3];
  return answer;
}