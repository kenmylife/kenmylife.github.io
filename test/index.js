let game = {
  //每次賭金
  stake: null,
  //玩家物件
  p1: null,
  p2: null,
  p3: null,
  p4: null,
  //賭資
  bet: {
    bet: null,
    bet2: null
  },
  //玩家的集合 ，player: [ken,jen,jerry,wendy]
  player: [],
  name: []
};

function initGame() {
  getBet();
  game.p1 = new Player(getNameColor(1));
  game.p2 = new Player(getNameColor(2));
  game.p3 = new Player(getNameColor(3));
  game.p4 = new Player(getNameColor(4));
  game.player = [game.p1, game.p2, game.p3, game.p4];
  getName();
  createOwnOpponent();
  show();
}
//製造玩家屬性方法
function Player(obj) {
  //傳入player 物件
  this.name = obj.name; //名字由玩家輸入
  this.money = [];
  this.color = obj.color; //代表顏色
  //對手的名字屬性金額集合  player.name
  this.player = {};
  this.win = function(bet, rival) {
    this.money.push(bet);
    rival.money.push(-bet);
    this.player[rival.name].money.push(bet);
    rival.player[this.name].money.push(bet * -1);
    listMoney();
  };
  this.total = function() {};
}

//抓下注金額
function getBet() {
  game.bet.bet = document.querySelector("#origin").value;
  game.bet.bet2 = document.querySelector("#bet").value;
}

function show() {
  showName();
  showOpponent();
}

//抓玩家輸入的名字和資料
function getNameColor(num) {
  let obj = {};
  obj.name = document.querySelector("#player_" + num).value;
  obj.color = document.getElementById(
    "other_player" + num
  ).firstElementChild.style.borderTopColor;
  return obj;
  // game.pNameColor = {
  //   p1: { name: p1, color: p1c },
  //   p2: { name: p2, color: p2c },
  //   p3: { name: p3, color: p3c },
  //   p4: { name: p4, color: p4c }
  // };
}

//秀出小卡
document.getElementById("wholeTable").addEventListener("click", handler);

document.getElementById("wholeTable").addEventListener("click", function() {
  document.getElementById("wholeTable").addEventListener("click", handler);
});

function listMoney() {
  // 1. 每位玩家總金額
  document.getElementById("player1").nextElementSibling.innerHTML = sum(
    game.p1.money
  );
  document.getElementById("player2").nextElementSibling.innerHTML = sum(
    game.p2.money
  );
  document.getElementById("player3").nextElementSibling.innerHTML = sum(
    game.p3.money
  );
  document.getElementById("player4").nextElementSibling.innerHTML = sum(
    game.p4.money
  );
}
// 2.玩家區對手總金額
function listEachOpponent() {}
// 3.玩家區對手金額列表

function sum(player) {
  var sum = 0;
  player.forEach(element => {
    sum += element;
  });
  return sum;
}

function getName() {
  game.name.push(game.p1.name);
  game.name.push(game.p2.name);
  game.name.push(game.p3.name);
  game.name.push(game.p4.name);
  console.log(game.name);
}

let aas = document.getElementsByTagName("button");
console.log(aas[0]);
//window.addEventListener("load", function() {})
