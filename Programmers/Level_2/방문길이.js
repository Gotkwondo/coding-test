const solution = (dirs) => {
    const command = {
        U: ([y, x]) => {
            if(y <= 4){
                return [y+1, x];
            }
            else return false;
        },
        D: ([y, x]) => {
            if(y >= -4){
                return [y-1, x];
            }
            else return false;
        },
        R: ([y, x]) => {
            if(x <= 4){
                return [y, x+1];
            }
            else return false;
        },
        L: ([y, x]) => {
            if(x >= -4) {
                return [y, x - 1];
            }
            else return false;
        }
    }
    const way = {};
    let curPos = [0, 0];
    
    for(let i = 0; i < dirs.length; i++){
        const pos = command[dirs[i]](curPos);
        if(pos === false) {
            continue;
        }
        way[`${curPos[0]}${curPos[1]}to${pos[0]}${pos[1]}`] = way[`${curPos[0]}${curPos[1]}to${pos[0]}${pos[1]}`] ? 1 : 1;
        way[`${pos[0]}${pos[1]}to${curPos[0]}${curPos[1]}`] = way[`${pos[0]}${pos[1]}to${curPos[0]}${curPos[1]}`] ? 1 : 1;
        curPos = pos;
    }
    return Object.keys(way).length / 2;
}