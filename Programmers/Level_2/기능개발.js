const solution = (progresses, speeds) => {
  let answer = [0];
  let restDays = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
  let bigDay = restDays[0];
  let cnt = 0;
    
  for (let i = 0; i < restDays.length; i++) {
    if (restDays[i] > bigDay) {
      bigDay = restDays[i];
      answer[++cnt] = 1;
    }
    else {
      answer[cnt] += 1;
    }
    // if(restDays[i] <= bigDay){
    //     answer[cnt] += 1;
    // }
    // else{
    //     answer[++cnt] = 1;
    //     bigDay = restDays[i];
    // }
  }
  return answer;
}