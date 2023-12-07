const solution = (n) => {
  return func(n) % 1234567;
}

const func = (m) => {
  let arr = [0, 1, 1];
  for (let i = 3; i <= m; i++) {
    arr[i] = arr[i - 1] % 1234567 + arr[i - 2] % 1234567;
  }
  return arr[m];
}