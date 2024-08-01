function solution(stones, k) {
  let min = 1;
  let max = 200000000;
    
  while (min <= max) {
    const mid = (min + max) / 2 >> 0;
    let cnt = 0;
    let flag = false;
        
    for (const val of stones) {
      cnt = val - mid <= 0 ? cnt + 1 : 0;
      if (cnt === k) {
        flag = true;
        break;
      }
    }
    flag ? max = mid - 1 : min = mid + 1;
  }
    
  return min;
}