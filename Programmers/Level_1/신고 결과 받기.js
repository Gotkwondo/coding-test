const solution = (id_list, report, k) => {
  let reports = [...new Set(report)].map(a => { return a.split(' ') });
  let answer = new Array(id_list.length).fill(0);
  let list = {};
    
  id_list.map((e) => list[e] = []);
  report.forEach((e, i) => {
    const [a, b] = e.split(' ');
    if (!list[b].find(e => e === a)) list[b].push(a);
  });
    
  for (const key in list) {
    if (list[key].length >= k) {
      list[key].forEach(e => answer[id_list.indexOf(e)] += 1);
    }
  }
  console.log(reports)
  return answer;
}