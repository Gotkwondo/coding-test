// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		const num = +line;
		let factNum = BigInt(1);
		for(let i = 2; i <= num; i++){
			factNum *= BigInt(i);
		}
		
		while(factNum >= 10n){
			let sum = BigInt(0);
			let temp = factNum;
			while(temp > 0n){
				sum += temp % 10n;
				temp = temp / 10n;
			}
			factNum = sum;
		}
		console.log(factNum.toString())
		rl.close();
	}
	
	process.exit();
})();

// // Run by Node.js 실패 코드
// const readline = require('readline');

// const fact = (n) => {
// 	return (n != 1n) ? n * fact(n - 1n) : 1n;
// };

// (async () => {
// 	let rl = readline.createInterface({ input: process.stdin });
	
// 	for await (const line of rl) {
// 		let num = BigInt(+line);
// 		let factNum = fact(num);
		
// 		while(factNum >= 10n){
// 			let sum = BigInt(0);
// 			let temp = factNum;
// 			while(temp > 0n){
// 				sum += temp % 10n;
// 				temp = temp / 10n;
// 			}
// 			factNum = sum;
// 		}
// 		console.log(factNum.toString())
// 		rl.close();
// 	}
	
// 	process.exit();
// })();