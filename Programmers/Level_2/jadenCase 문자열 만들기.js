const solution = (s) => {
  return s.split(' ').map(e => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
}