function solution(A, B) {
  let lp = 0;
  let rp = 0;
  let answer = 0;
    
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
    
  while (lp < B.length) {
    if (B[lp] > A[rp]) {
      answer++;
      lp++;
      rp++;
    }
    else {
      lp++
    }
  }
    
  return answer;
}