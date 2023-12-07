const solution = (n) => {
  let n1 = n.toString(2).split("1").length;
  while (true) {
    n++
    if (n.toString(2).split("1").length === n1) return n;
  }
}