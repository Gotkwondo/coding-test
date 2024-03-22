const solution = (today, terms, privacies) => {
  let answer = [];
  const stale = {};
  today = Number(today.split('.').join(''));
  terms.forEach(e => {
    const [type, month] = e.split(' ');
    stale[type] = +month;
  });
    
  privacies.forEach((e, idx) => {
    let [fullDate, type] = e.split(' ');
    let [year, month, day] = fullDate.split('.').map(Number);
    month += stale[type];
    if (month > 12) {
      if (month % 12 === 0) {
        year += parseInt(month / 12) - 1;
        month = 12;
      } else {
        year += parseInt(month / 12);
        month = month % 12;
      }
    }
    year = `${year}`
    month = `${month}`
    day = `${day}`
    if (month.length === 1) month = '0' + month;
    if (day.length === 1) day = '0' + day;
    if (Number(year + month + day) <= today) answer.push(idx + 1);
  })
    
  return answer;
};