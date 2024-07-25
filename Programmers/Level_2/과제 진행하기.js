// stack을 이용해 멈춘 과제 저장 후 하나씩 빼내면서 잔업 진행
function solution(plans) {
  const newPlans = plans.map(([sub, st, due]) => {
    const [hour, min] = st.split(':');
    const stTime = (+hour * 60) + +min;
    return [sub, stTime, stTime + +due, +due];
  }).sort((a, b) => a[1] - b[1]);
  const wait = [];
  const answer = [];
  while (newPlans.length > 0) {
    const curTask = newPlans.shift();
    const nextTask = newPlans[0];
    if (!nextTask) {
      answer.push(curTask[0]);
      break;
    }
    let timeDif = nextTask[1] - curTask[2];
    if (timeDif >= 0) {
      answer.push(curTask[0]);
      while (wait.length > 0) {
        const waitTask = wait.pop();
        if (timeDif >= waitTask[3]) {
          answer.push(waitTask[0]);
          timeDif -= waitTask[3];
        }
        else {
          waitTask[3] -= timeDif;
          wait.push(waitTask);
          break;
        }
      }
    }
    else if (timeDif < 0) {
      curTask[3] = (curTask[2] - nextTask[1]);
      wait.push(curTask)
    }
  }
  for (let i = wait.length - 1; i >= 0; i--) {
    answer.push(wait[i][0]);
  }
  return answer
}