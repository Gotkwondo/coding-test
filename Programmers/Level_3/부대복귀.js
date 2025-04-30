function solution(n, roads, sources, destination) {
    const level = Array.from({length: n + 1}, () => Infinity);
    const map = {};
    const que = [destination];
    level[destination] = 0;
    
    for(let [s, e] of roads){
        if(!map[s]) map[s] = [];
        if(!map[e]) map[e] = [];
        map[s].push(e);
        map[e].push(s);
    }
    
    while(que.length){
        const man = que.shift();
        for(let temp of map[man] ?? []){
            if(level[man] + 1 < level[temp]){
                level[temp] = level[man] + 1;
                que.push(temp)
            }
        }
    }
    return sources.map(e => level[e] === Infinity ? -1 : level[e]);
}