const solution = (n) => {
  let answer = 1;
  if (n > 1) {
    while (true) {
      if (n === 1) {
        return answer;
      }
      else {
        if (n % 2 === 0) {
          n = n / 2;
        }
        else {
          n -= 1;
          answer += 1;
        }
      }
    }
  }
  return answer;
}