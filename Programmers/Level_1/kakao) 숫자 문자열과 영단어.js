const solution = (s) => {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
    
  for (let i = 0; i < 10; i++) {
    let res = s.split(arr[i]);
    s = res.join(`${i}`);
  }
  return +s;
};