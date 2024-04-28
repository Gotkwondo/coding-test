const solution = (skill, skill_trees) => {
  const reg = new RegExp(`[^${skill}]`, 'g');
  const sk = skill.split('');
  let arr = skill_trees.map(e => {
    return e.replace(reg, '');
  }).filter(e => {
    return skill.indexOf(e) === 0;
  })

  return arr.length;
};