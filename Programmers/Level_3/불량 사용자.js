function solution(user_id, banned_id) {
  const check = Array.from({ length: user_id.length }, () => false);
  const regArr = banned_id.map(e => new RegExp(`^${e.replaceAll("*", ".")}$`));
  const set = new Set();
    
  const dfs = (index, arr) => {
    if (index === banned_id.length) {
      set.add(arr.sort().join(','));
    }
    else {
      for (let i = 0; i < user_id.length; i++) {
        if (check[i]) continue;
                
        if (user_id[i].match(regArr[index])) {
          check[i] = true;
          dfs(index + 1, [...arr, user_id[i]]);
          check[i] = false;
        }
      }
    }
  };
    
  dfs(0, []);
  return set.size;
}