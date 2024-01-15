const solution = (k, m, score) => {
    const num = score.sort((a, b) => b - a);
    let answer = 0;
    
    for(let i = 0; i < score.length; i+= m){
        let arr = score.slice(i, i+m);
        if(arr.length === m){
            answer += arr[arr.length - 1] * m;
        }
    }
    return answer;
}