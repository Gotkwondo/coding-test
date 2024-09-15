function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let d = 0;
  let p = 0;
    
  for (let i = n - 1; i >= 0; i--) {
    let [del, pick] = [deliveries[i], pickups[i]];
    let cnt = 0;
        
    d -= del;
    p -= pick;
        
    while (d < 0 || p < 0) {
      d += cap;
      p += cap;
      cnt += 1;
    }
    answer += (cnt * (i + 1) * 2);
  }
  return answer;
}