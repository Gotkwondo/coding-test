const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [p, r] = input.shift().split(" ").map(Number);
const roomList = [];
let answer = "";

class Room {
  constructor(firstEnteredUserInfo, level, maxEnter) {
    this.nameList = [firstEnteredUserInfo];
    this.levelRange = [level - 10 < 0 ? 0 : level - 10, level + 10];
    this.remainEnterCnt = maxEnter - 1;
    this.roomState = this.remainEnterCnt > 0 ? "Waiting!" : "Started!";
  }
  checkCanStart() {
    if (this.remainEnterCnt === 0) return (this.roomState = "Started!");
    return;
  }
  checkCanEnter(level) {
    if (
      this.levelRange[0] <= level &&
      level <= this.levelRange[1] &&
      this.remainEnterCnt > 0
    ) {
      return true;
    } else return false;
  }
  enter(userInfo) {
    this.nameList.push(userInfo);
    this.remainEnterCnt -= 1;
    this.checkCanStart();
  }
  sortName() {
    this.nameList.sort((a, b) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
    });
  }
}

const findCanEnterIndex = (level, roomList) => {
  if (roomList.length > 0) {
    const roomIndex = roomList.findIndex((room) => room.checkCanEnter(level));
    return roomIndex;
  } else return -1;
};

for (let i = 0; i < p; i++) {
  const [level, name] = input[i].split(" ");
  const enterIndex = findCanEnterIndex(+level, roomList);
  if (enterIndex >= 0) {
    roomList[enterIndex].enter([level, name]);
  } else {
    roomList.push(new Room([level, name], +level, r));
  }
}

for (let room of roomList) {
  answer += `${room.roomState}\n`;
  room.sortName();
  for (let name of room.nameList) {
    answer += `${name.join(" ")}\n`;
  }
}

console.log(answer);