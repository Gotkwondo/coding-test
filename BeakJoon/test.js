const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt')
  .toString().trim().split('\n');

const b = +input.shift();
const weight = +input.shift();
const arr = input[0].split(' ').map(Number);

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let que = [];
    let w = 0;
    
    while(truck_weights.length > 0 || que.length){
        if(que.length && que[0][0] === answer) w -= que.shift()[1];
        if(w + truck_weights[0] <= weight){
            console.log('dd')
            const t = truck_weights.shift();
            que.push([answer + bridge_length, t]);
            w += t;
        }
        else {
          if (que[0]) answer = que[0][0] - 1;
            
        }
        answer++;
        console.log(answer)
    }
    return answer;
}
console.log(solution(b, weight, arr))










// function solution(bridge_length, weight, truck_weights) {
//     let time = 0, que = [[0,0]], weightOnB = 0;
//     while(que.length || truck_weights.length > 0){
//         if(que[0][0] === time) weightOnB -= que.shift()[1];
//         if(weightOnB + truck_weights[0] <= weight){
//             weightOnB += truck_weights[0];
//             que.push([time + bridge_length, truck_weights.shift()]);
//         } else{
//             if(que[0]) time = que[0][0] - 1;
//         }
//         time++;
//     }
//     return time;
// }


// function solution(bridge_length, weight, truck_weights) {
//     let answer = 0;
//     let wait = [...truck_weights];
//     let crossing = [];
    
//     while(wait.length > 0){
//         const crossingWeight = crossing.reduce((a, e) => a + e, 0);
//         if(crossingWeight + wait[0] <= weight){
//             crossing.push(wait.shift());
//             answer += 1;
//             console.log(crossing, answer, 'aa');
//             if(!wait.length){
//                 answer += bridge_length;
//                 crossing = [];
//                 console.log(crossing, answer, 'bb')
//             } 
//         }
//         else{
//             answer += bridge_length;
//             crossing = [];
//             crossing.push(wait.shift());
//             console.log(crossing, answer, 'cc')
//             if(!wait.length){
//                 answer += bridge_length;
//                 crossing = [];
//                 console.log(crossing, answer, 'dd')
//             } 
//         }
//     }    
//     return answer;
// }