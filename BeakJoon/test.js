const path = __dirname + '/example.txt' // /dev/stdin
let input = require('fs').readFileSync(path).toString().trim().split('\n').map(e => +e)
