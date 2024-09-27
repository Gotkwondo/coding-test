const solution = (n, arr1, arr2) => {
  arr1 = arr1.map(e => {
    let binary = e.toString(2);
    const len = binary.length;
    for (let i = 0; i < n - len; i++) {
      binary = '0' + binary;
    }
    return binary.split('').map(Number);
  });
  arr2 = arr2.map(e => {
    let binary = e.toString(2);
    const len = binary.length;
    for (let i = 0; i < n - len; i++) {
      binary = '0' + binary;
    }
    return binary.split('').map(Number);
  })
  return arr1.map((el, idx) => {
    return el.map((e, i) => {
      return (e || arr2[idx][i]) === 1 ? '#' : ' ';
    }).join('')
  })
};