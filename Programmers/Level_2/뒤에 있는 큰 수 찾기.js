// 기존의 코드는 2중 for문을 이용해 배열을 순회해 검증했지만,
// 이 경우는 작은 수 들은 큰 상관은 없지만 제일 큰 수라던가
// 뒤에 자신보다 큰 수가 없는 경우는 배열의 끝가지 순할 수 있기에
// 시간 복잡도에서 통과되지 않을 수 있다. 이런 시간 복잡도는 스택을
// 이용해 스택의 맨 뒤에 있는 수부터 차례대로 뒤에 있는 수와 비교해
// 처리해주자.
const solution = (numbers) => {
  let answer = Array.from({ length: numbers.length }, () => -1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
};