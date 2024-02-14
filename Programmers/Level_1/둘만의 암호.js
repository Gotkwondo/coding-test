const solution = (s, skip, index) => {
  skip = [...skip].map(e => e.charCodeAt()).sort((a, b) => a - b);
  let st = [...s].map(e => e.charCodeAt());
  let newArr = [];
    
  st.forEach((e, idx) => {
    for (let i = 0; i < index; i++) {
      e += 1;
      if (e > 122) {
        e = 97;
      }
      while (skip.includes(e)) {
        e += 1;
        if (e > 122) {
          e = 97;
        }
      }
    }
    newArr.push(String.fromCharCode(e));
  })
  return newArr.join('');
}