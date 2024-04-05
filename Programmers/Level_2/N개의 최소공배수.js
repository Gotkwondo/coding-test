// const solution = (arr) => {
//   return arr.reduce((a, b) => {
//     return (a * b) / getGcd(a, b)
//   }, 1)
// };

// const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b)

const solution = (arr) => {
  // 최대 공약수 구하는 공식
  const getGCD = (a, b) => {
    return a % b ? getGCD(b, a % b) : b;
  }
    
  return arr.reduce((acc, cur) => {
    // 최소 공배수는 두 수를 곱한뒤 두 수의 최대 공약수로 나누면 구해진다.
    return acc * cur / getGCD(acc, cur);
  }, 1);
};