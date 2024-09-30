// function solution(n, k, cmd) {
//   const map = new Map();
//   const del = [];

//   for (let i = 0; i < n; i++) {
//     map.set(i, "O");
//   }

//   for (let i = 0; i < cmd.length; i++) {
    // if (cmd[i] === "C") {
    //   map.set(k, "X");
    //   del.push(k);
    //   if (map.size > k + 1) {
    //     if (map.get(k + 1) !== 'X') {
    //       while (map.get(k + 1) !== 'O') {
    //         k++;
    //       }
    //     }
    //     else {
    //       while (map.get(k - 1) !== 'O') {
    //         k--;
    //       }
    //     }
    //   }
    // }
    // else if (cmd[i] === "Z") {
    //   const last = del.pop();
    //   map.set(last, 'O');
    // }
    // else {
    //   let [c, d] = cmd[i].split(' ');
    //   for (let j = 1; j <= d; j++) {
    //     if (map.get(k + i) === 'X') d++;
    //   }
    //   c === "D" ? k += +d : k -= +d;
    // }
//   }
//   return [...map].reduce((acc, cur) => acc + cur[1], '');
// }

function solution(n, k, cmd) {
    const linked = {
        0: [undefined, 1]
    };
    const state = Array.from({ length: n }, () => true)
    const del = [];
    
    for (let i = 1; i < n; i++) {
        if (i === n - 1) linked[i] = [i - 1, undefined];
        else linked[i] = [i - 1, i + 1];
    }
    
    for (let i = 0; i < cmd.length; i++) {
        if (cmd[i] === "C") {
            const [prev, next] = linked[k];
            if (prev === undefined) {
                linked[next][0] = undefined;
            }
            else if (next === undefined) {
                linked[prev][1] = undefined;
            }
            else {
                linked[prev][1] = next;
                linked[next][0] = prev;
            }
            del.push(k);
            state[k] = false;
            k = linked[k][1] ? linked[k][1] : linked[k][0]
        }
        else if (cmd[i] === "Z") {
            const re = del.pop();
            const [prev, next] = linked[re];
            if (prev === undefined) {
                linked[next][0] = re;
            }
            else if (next === undefined) {
                linked[prev][1] = re;
            }
            else {
                linked[prev][1] = re;
                linked[next][0] = re;
            }
            state[re] = true;
        }
        else {
            let [c, d] = cmd[i].split(' ');
            if (c === 'D') {
                for (let j = 0; j < +d; j++) {
                    k = linked[k][1];
                }
            }
            else {
                for (let j = 0; j < +d; j++) {
                    k = linked[k][0];
                }
            }
        }
    }
    return Array.from({ length: n }, (_, i) => state[i] ? 'O' : 'X').join('');
}