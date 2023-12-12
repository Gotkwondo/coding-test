const solution = (msg) => {
  let dic = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  let answer = [];
  let word = '';
  let indexInDic = 0;
    
  for (let i = 0; i < msg.length; i++) {
    word += msg[i];
    const isExist = dic.indexOf(word);
    if (isExist !== -1) {
      indexInDic = isExist;
    }
    else {
      dic.push(word);
      answer.push(indexInDic + 1);
      word = '';
      i--
    }
  }
  answer.push(indexInDic + 1);
  return answer;
}