const solution = (s) => {
  return `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`;
}