const solution = (new_id) => {
  // 정규식을 이용한 문제 풀이 필요
  let answer = new_id.toLowerCase().replace(/[^0-9a-z-_.]/g, '');
  // ab+ 정규식은 a뒤에 b가 1개 이상일 때를 의미
  // 참고 링크: https://gocoding.tistory.com/93
  answer = answer.replace(/\.\.+/g, '.');
  while (answer[0] === '.') {
    answer = answer.slice(1)
  }
    
  if (!answer.length) {
    answer = 'a';
  }
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
  }
  answer = answer[answer.length - 1] === '.' ? answer.slice(0, answer.length - 1) : answer;
    
  if (answer.length <= 2) {
    const add = answer[answer.length - 1]
    while (answer.length !== 3) {
      answer += add;
    }
  }
  return answer;
}