const solution = (keymap, targets) => {
  let answer = [];
  let obj = {};
    
  keymap.forEach(key => {
    for (let i = 0; i < key.length; i++) {
      if (!obj[key[i]]) obj[key[i]] = i + 1;
      else if (obj[key[i]] && obj[key[i]] > i + 1) obj[key[i]] = i + 1;
    }
  });
    
  targets.forEach(target => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      if (!obj[target[i]]) {
        cnt = -1;
        break;
      }
      cnt += obj[target[i]];
    }
    cnt === 0 ? false : answer.push(cnt);
  });
    
  return answer;
}