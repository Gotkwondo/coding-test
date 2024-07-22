function solution(n) {
  let answer = 0;
  const arr = Array.from({ length: n }, () => -1);
    
  const valify = (arr, x, y) => {
    for (let i = 0; i < x; i++) {
      if (Math.abs(x - i) === Math.abs(y - arr[i]) || arr[i] === y) return false;
    }
    return true;
  }
    
  const dfs = (arr, depth) => {
    if (depth === n) {
      answer++;
      return;
    }
    const temp = [...arr];
        
    for (let i = 0; i < n; i++) {
      if (valify(temp, depth, i)) {
        temp[depth] = i;
        dfs(temp, depth + 1);
      }
    }
  }
  dfs(arr, 0);
  return answer;
}