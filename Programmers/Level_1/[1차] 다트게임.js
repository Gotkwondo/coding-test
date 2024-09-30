const solution = (dartResult) => {
  const shoot = [];
  const type = {
    "S": 1,
    "D": 2,
    "T": 3
  };

  for (let i = 0; i < dartResult.length; i++) {
    if (+dartResult[i] >= 0 && +dartResult[i] <= 9) {
      if (+dartResult[i] === 1 && +dartResult[i + 1] === 0) {
        i++;
        shoot.push(10);
      }
      else {
        shoot.push(+dartResult[i]);
      }
    }
    else {
      if (dartResult[i] === "S" || dartResult[i] === "D" || dartResult[i] === "T") {
        shoot[shoot.length - 1] = shoot[shoot.length - 1] ** type[dartResult[i]];
      }
      else {
        if (dartResult[i] === "#") {
          shoot[shoot.length - 1] *= -1;
        }
        else if (dartResult[i] === "*") {
          if (shoot.length === 1) shoot[shoot.length - 1] *= 2;
          else {
            shoot[shoot.length - 2] *= 2;
            shoot[shoot.length - 1] *= 2;
          }
        }
      }
    }
  }
  return shoot.reduce((acc, cur) => acc + cur, 0);
};