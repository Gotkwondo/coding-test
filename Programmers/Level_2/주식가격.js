const solution = (prices) => {
  let answer = [];
  let stack = [0];
    
  for (let i = 1; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const num = stack.pop();
      answer[num] = i - num;
    }
    stack.push(i)
  }
  for (let i = 0; i < stack.length; i++) {
    answer[stack[i]] = prices.length - stack[i] - 1;
  }
  return answer;
};