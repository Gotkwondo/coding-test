const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

let answer = [];

const checkMou = (st) => {
  const aeiou = /[aeiou]/.test(st);
  return aeiou;
};

const checkTriple = (st) => {
  let aCnt = 0;
  let cnt = 0;
  for (let s of st) {
    if (/[aeiou]/.test(s)) {
      cnt = 0;
      aCnt += 1;
    } else {
      aCnt = 0;
      cnt += 1;
    }

    if (aCnt === 3 || cnt === 3) return false;
  }
  return true;
};

const checkDouble = (st) => {
  const sInfo = { text: st[0], cnt: 0 };

  for (let s of st) {
    if (sInfo.text === s) sInfo.cnt += 1;
    else {
      sInfo.text = s;
      sInfo.cnt = 1;
    }
    if (sInfo.cnt === 2 && !(sInfo.text === "e" || sInfo.text === "o")) {
      return false;
    }
  }
  return true;
};

for (let st of input) {
  if (st === "end") break;
  const mou = checkMou(st);
  const triple = checkTriple(st);
  const double = checkDouble(st);
  if (mou && triple && double) {
    answer.push(`<${st.trim()}> is acceptable.`);
  } else {
    answer.push(`<${st.trim()}> is not acceptable.`);
  }
}

console.log(answer.join("\n"));
