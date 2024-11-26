const makeTime = (time) => {
  const [min, sec] = time.split(':').map(Number);
  return (min * 60) + sec;
}

const solution = (video_len, pos, op_start, op_end, commands) => {
  let answer = ['', ''];
  let cur = makeTime(pos);
  const opS = makeTime(op_start);
  const opE = makeTime(op_end);
  const vL = makeTime(video_len);
  
  if (cur >= opS && cur <= opE) {
    cur = opE;
  }

  for (let i = 0; i < commands.length; i++) {
    if (cur >= opS && cur <= opE) {
      cur = opE;
    }
    cur += (commands[i] === 'next' ? 1 : -1) * 10;
    if (cur < 0) {
      cur = 0;
    }
    else if (cur > vL) {
      cur = vL;
    }
  }

  if (cur >= opS && cur <= opE) {
    cur = opE;
  }

  answer[0] = Math.floor((cur) / 60) >= 10 ? `${Math.floor((cur) / 60)}` : `0${Math.floor((cur) / 60)}`;
  answer[1] = Math.floor((cur) % 60) >= 10 ? `${Math.floor((cur) % 60)}` : `0${Math.floor((cur) % 60)}`;

  return `${answer[0]}:${answer[1]}`;
};