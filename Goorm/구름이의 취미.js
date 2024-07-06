// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n;

  for await (const line of rl) {
    n = BigInt(line);
  }
  rl.close();

  let sum = BigInt((n * (n + 1n) / 2n) ** 2n) % BigInt(1000000007);

  console.log(`${sum}`.split('n')[0]);
  process.exit();
})();