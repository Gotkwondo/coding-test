const solution = (n, k) => {
  return n.toString(k).split('0').filter((e) => isPrime(+e)).length;
}

const isPrime = (num) => {
  if (!num || num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true
}