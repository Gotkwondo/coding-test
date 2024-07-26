function solution(r1, r2) {
  let answer = 0;
  for (let i = 1; i <= r2; i++) {
    const max = Math.floor(Math.sqrt(Math.pow(r2, 2) - Math.pow(i, 2)));
    const min = i < r1 ? Math.ceil(Math.sqrt(Math.pow(r1, 2) - Math.pow(i, 2))) : 0;
    answer += max - min + 1;
  }
  return answer * 4;
}