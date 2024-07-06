// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
let TC = null;

const sol = ([normal, special]) => {
	const k1 = normal / 5n;
	const k2 = (normal + special) / 12n;
	let cnt = k1 < k2 ? k1 : k2;
	
	console.log(String(cnt));
}

rl.on("line", function(line) {
	if(TC === null){
		TC = +line;
	}
	else{
		sol(line.split(' ').map(e => BigInt(e)));
		TC--;
	}
	if(!TC){
		rl.close();
	}
}).on("close", function() {
	process.exit()
});