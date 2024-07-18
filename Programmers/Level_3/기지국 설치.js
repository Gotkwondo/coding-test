function solution(n, stations, w) {
  let answer = 0;
  let index = 0;
  let cur = 1;
    
  while (cur <= n) {
    if (cur >= stations[index] - w && cur <= stations[index] + w) {
      cur = stations[index] + w;
      index++;
    }
    else {
      answer++;
      cur += w * 2;
    }
    cur++;
  }
    
  return answer;
}