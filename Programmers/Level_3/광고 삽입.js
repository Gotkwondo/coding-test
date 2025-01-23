const solution = (play_time, adv_time, logs) => {
  const calcTime = (time) => {
    const [h, m, s] = time.split(":");
    const newTime = h * 3600 + m * 60 + s * 1;
    return newTime;
  };

  const format = (time) => {
    const h = (time / 3600) >> 0;
    const m = ((time / 60) >> 0) % 60;
    const s = time % 60;
    return `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
      s > 9 ? s : "0" + s
    }`;
  };

  const totalPlayTime = calcTime(play_time);
  const adTime = calcTime(adv_time);
  const ary = Array.from({ length: totalPlayTime }, () => 0);

  for (let log of logs) {
    const [st, end] = log.split("-").map((e) => calcTime(e));
    ary[st] += 1;
    ary[end] -= 1;
  }

  for (let i = 1; i < ary.length; i++) {
    ary[i] += ary[i - 1];
  }
  for (let i = 1; i < ary.length; i++) {
    ary[i] += ary[i - 1];
  }

  let answer = 0;
  let sum = ary[adTime - 1];

  for (let i = adTime - 1; i <= ary.length; i++) {
    const ad = ary[i] - ary[i - adTime];
    if (ad > sum) {
      sum = ad;
      answer = i - adTime + 1;
    }
  }

  return format(answer);
};
