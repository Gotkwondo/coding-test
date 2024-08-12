const find = (parent, x) => {
  if (parent[x] === x) {
    return x;
  }
  return parent[x] = find(parent, parent[x]);
}

const isSameParent = (parent, a, b) => {
  a = find(parent, a);
  b = find(parent, b);
    
  return a === b;
}

const union = (parent, st, ed) => {
  const a = find(parent, st);
  const b = find(parent, ed);
  if (a > b) {
    parent[a] = b;
  }
  else {
    parent[b] = a;
  }
}

const solution = (n, costs) => {
  let answer = 0;
  const arr = Array.from({ length: n }, (_, i) => i);
  costs.sort((a, b) => a[2] - b[2]);
    
  for (const [a, b, cost] of costs) {
    if (!isSameParent(arr, a, b)) {
      answer += cost;
      union(arr, a, b);
    }
  }
  return answer;
}


