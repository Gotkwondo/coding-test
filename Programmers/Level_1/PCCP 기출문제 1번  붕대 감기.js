const solution = (bandage, health, attacks) => {
  const [hT, hV, addH] = bandage;
  let curTime = 0;
  let curHealth = health;
  let relayTime = 0;
    
  for (let i = 0; i < attacks.length; i++) {
    const [attackTime, damage] = attacks[i];
    let blankTime = attackTime - curTime;
    if (blankTime > 1) {
      while (blankTime > 1 && curHealth < health) {
        curHealth = curHealth + hV > health ? health : curHealth + hV;
        relayTime += 1;
        blankTime -= 1;
        if (relayTime === hT) {
          relayTime = 0;
          curHealth = curHealth + addH > health ? health : curHealth + addH;
        }
      }
    }
    curTime = attackTime;
    curHealth -= damage;
    relayTime = 0;
        
    if (curHealth === 0 || curHealth < 0) {
      return -1;
    }
  }
  return curHealth;
};