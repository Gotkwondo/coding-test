function solution(p) {
  // let answer = '';

  const check = (st) => {
    const stack = [];

    for (let i = 0; i < st.length; i++) {
      if (st[i] === '(') stack.push('(');
      else {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    return true;
  }

  const func = (w) => {
    let res = '';
    let cnt = 0;

    if (w.length === 0) return '';

    for (let i = 0; i < w.length; i++) {
      if (w[i] === '(') cnt += 1;
      else cnt -= 1;

      if (cnt === 0) {
        const sl = w.slice(0, i + 1);
        if (check(sl)) {
          res = sl + func(w.slice(i + 1));
          return res;
        }
        else {
          res = '(' + func(w.slice(i + 1)) + ')';
          for (let j = 1; j < i; j++) {
            if (w[j] === '(') res = res + ')';
            else res = res + '(';
          }
        }
        return res;
      }
    }
  }
  return func(p);
}