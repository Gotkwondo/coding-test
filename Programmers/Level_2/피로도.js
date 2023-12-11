const solution = (k, dungeons) => {
  // dfs로 문제를 풀면 방문하는 노드가 방문을 했었는지 기록하는 것이 중요하다. (무한 루프에 빠질 수 있음)
  let answer = 0;
  let visited = Array(dungeons.length).fill(false);

  const dfs = (point, temp) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && point >= dungeons[i][0]) {
        visited[i] = true;
        dfs(point - dungeons[i][1], temp + 1);
        visited[i] = false;
      }
    }
    // 값 비교는 이전 재귀에서 통과한 뒤 다음 차례에 실행된다.
    answer = Math.max(answer, temp)
  }
  dfs(k, 0)
  return answer;
}