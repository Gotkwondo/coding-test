function solution(k, ranges) {
  const arr = [k];
  const size = [];
  const answer = [];
    
  while (k > 1) {
    if (k % 2 === 1) k = (k * 3) + 1;
    else k /= 2;
    arr.push(k)
  }
    
  for (let i = 0; i < arr.length - 1; i++) {
    const prev = arr[i];
    const next = arr[i + 1];
    size.push(Math.min(prev, next) + Math.abs(prev - next) / 2);
  }
    
  for (let i = 0; i < ranges.length; i++) {
    const [prev, next] = ranges[i];
    const max = arr.length - 1 + next;
    let areaSize = 0;
    if (prev > max) {
      answer.push('-1.0');
      continue;
    }
    for (let j = prev; j < max; j++) {
      areaSize += size[j];
    }
    answer.push(areaSize);
  }
    
  return answer;
}