function solution(user_id, banned_id) {
  const regs = banned_id.map(e => new RegExp(`^${e.replaceAll("*", '.')}$`))
  const set = new Set();
  const check = Array.from({ length: user_id.length }, () => false);

  const dfs = (len, arr) => {
    if (len === banned_id.length) {
      set.add(arr.sort().join(','));
      return;
    }
    else {
      for (let i = 0; i < user_id.length; i++) {
        if (check[i]) continue;
        if (user_id[i].match(regs[len])) {
          check[i] = true;
          dfs(len + 1, [...arr, user_id[i]]);
          check[i] = false;
        }
      }
    }

  };
  dfs(0, []);
  return set.size;
};