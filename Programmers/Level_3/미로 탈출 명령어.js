function solution(n, m, x, y, r, c, k) {
  let answer = "z".repeat(k);
  const dir = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  const st = ["d", "l", "r", "u"];
  let map = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => "x")
  );
  const minMove = Math.abs(r - x) + Math.abs(c - y);

  if (minMove > k || (k - minMove) % 2 !== 0) return "impossible";
  map[x][y] = "S";
  map[r][c] = "E";

  const dfs = (my, mx, tempString, distance) => {
    if (tempString.length > k) return;
    if (distance > k) return;
    if (tempString.length === k) {
      if (map[my][mx] === "E" && answer > tempString) {
        answer = tempString;
        return;
      }
    }
    if (answer !== "z".repeat(k)) return;
    for (let i = 0; i < 4; i++) {
      const ny = my + dir[i][0];
      const nx = mx + dir[i][1];
      if (ny > 0 && ny <= n && nx > 0 && nx <= m) {
        const temp = tempString + st[i];
        dfs(
          ny,
          nx,
          temp,
          Math.abs(ny - r) + Math.abs(nx - c) + tempString.length + 1
        );
      }
    }
  };
  dfs(x, y, "", k);
  return answer !== "z".repeat(k) ? answer : "impossible";
}
