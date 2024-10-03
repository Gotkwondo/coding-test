const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2) return true;
    
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (n, k) => {
  const len = n.toString(k).split('0').map(Number).filter(e => e !== 0 && isPrime(e)).length;
  return len ? len : 0;
};

// const solution = (n, k) => {
//     let answer = 0;
//     const num = n.toString(k).split('0').filter(e => e !== '1' && e !== '');
//     num.forEach(e => {
//         if(isPrime(e)) answer += 1;
//     });
//     return answer;
// }

// const isPrime = (n) => {
//   if (+n === 2) return true;
//   for (let i = 2; i <= Math.sqrt(+n); i++) {
//     if (+n % i === 0) return false;
//   }
//   return true;
// };

// const solution = (n, k) => {
//   return n.toString(k).split('0').filter((e) => isPrime(+e)).length;
// }

// const isPrime = (num) => {
//   if (!num || num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true
// }