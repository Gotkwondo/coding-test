// const solution = (n) => {
//   return func(n) % 1234567;
// }

// const func = (m) => {
//   let arr = [0, 1, 1];
//   for (let i = 3; i <= m; i++) {
//     arr[i] = arr[i - 1] % 1234567 + arr[i - 2] % 1234567;
//   }
//   return arr[m];
// }

const solution = (n) => {
  let arr = {
    0: 0,
    1: 1,
    2: 1,
  }
  // 재귀를 사용하게 되면 js는 최대 재귀 호출의 깊이가 작기 때문에 callstack에러가 발생
  // 그래서 DP를 이용해 풀이하도록
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
};
