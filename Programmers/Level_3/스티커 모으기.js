// // 35번 케이스만 불통....
// function solution(sticker) {
//   const len = sticker.length;
//   const dp1 = Array.from({ length: len - 1 }, () => 0);
//   const dp2 = Array.from({ length: len - 1 }, () => 0);
    
//   for (let i = 0; i < len - 1; i++) {
//     if (i === 0) dp1[i] = sticker[i];
//     else if (i === 1) dp1[i] = Math.max(dp1[i - 1], sticker[i]);
//     else {
//       dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
//     }
//   }
    
    
//   for (let i = 1; i < len; i++) {
//     if (i === 1) dp2[i - 1] = sticker[i];
        
//     else if (i === 2) dp2[i - 1] = Math.max(dp2[i - 2], sticker[i]);
//     else {
//       dp2[i - 1] = Math.max(dp2[i - 2], dp2[i - 3] + sticker[i]);
//     }
//   }
    
//   return Math.max(dp1.at(-1), dp2.at(-1));
// }

function solution(sticker) {
  const len = sticker.length;
  const dp1 = Array.from({ length: len - 1 }, () => 0);
  const dp2 = Array.from({ length: len - 1 }, () => 0);
    
  if (sticker.length === 1) return sticker[0];
    
  for (let i = 0; i < len - 1; i++) {
    if (i === 0) dp1[i] = sticker[i];
    else if (i === 1) dp1[i] = Math.max(dp1[i - 1], sticker[i]);
    else {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
  }
    
    
  for (let i = 1; i < len; i++) {
    if (i === 1) dp2[i - 1] = sticker[i];
        
    else if (i === 2) dp2[i - 1] = Math.max(dp2[i - 2], sticker[i]);
    else {
      dp2[i - 1] = Math.max(dp2[i - 2], dp2[i - 3] + sticker[i]);
    }
  }
  return Math.max(dp1.at(-1), dp2.at(-1));
}