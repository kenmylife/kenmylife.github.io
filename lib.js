//在玩家區塊顯示名稱
function showName() {
  let p1 = document.getElementById("player1");
  p1.style.color = game.p1.color;
  p1.textContent = game.p1.name;
  p1.style.fontWeight = "bold";
  let p2 = document.getElementById("player2");
  p2.textContent = game.p2.name;
  p2.style.color = game.p2.color;
  p2.style.fontWeight = "bold";
  let p3 = document.getElementById("player3");
  p3.textContent = game.p3.name;
  p3.style.color = game.p3.color;
  p3.style.fontWeight = "bold";
  let p4 = document.getElementById("player4");
  p4.textContent = game.p4.name;
  p4.style.color = game.p4.color;
  p4.style.fontWeight = "bold";
}

//在每個玩家區塊建立對手卡片
function showOpponent() {
  let p1 = game.p1;
  let p1p = document.getElementById("other_player1").children;
  p1p[0].children[0].firstElementChild.textContent =
    p1.player[game.p2.name].name;
  p1p[0].children[0].firstElementChild.style.color = game.p2.color;

  p1p[1].children[0].firstElementChild.textContent =
    p1.player[game.p3.name].name;
  p1p[1].children[0].firstElementChild.style.color = game.p3.color;
  p1p[2].children[0].firstElementChild.textContent =
    p1.player[game.p4.name].name;
  p1p[2].children[0].firstElementChild.style.color = game.p4.color;
  let p2 = game.player[1];
  let p2p = document.getElementById("other_player2").children;
  p2p[0].children[0].firstElementChild.textContent =
    p2.player[game.p1.name].name;
  p2p[0].children[0].firstElementChild.style.color = game.p1.color;
  p2p[1].children[0].firstElementChild.textContent =
    p2.player[game.p3.name].name;
  p2p[1].children[0].firstElementChild.style.color = game.p3.color;
  p2p[2].children[0].firstElementChild.textContent =
    p2.player[game.p4.name].name;
  p2p[2].children[0].firstElementChild.style.color = game.p4.color;
  let p3 = game.player[2];
  let p3p = document.getElementById("other_player3").children;
  p3p[0].children[0].firstElementChild.textContent =
    p3.player[game.p1.name].name;
  p3p[0].children[0].firstElementChild.style.color = game.p1.color;
  p3p[1].children[0].firstElementChild.textContent =
    p3.player[game.p2.name].name;
  p3p[1].children[0].firstElementChild.style.color = game.p2.color;
  p3p[2].children[0].firstElementChild.textContent =
    p3.player[game.p4.name].name;
  p3p[2].children[0].firstElementChild.style.color = game.p4.color;
  let p4 = game.player[2];
  let p4p = document.getElementById("other_player4").children;
  p4p[0].children[0].firstElementChild.textContent =
    p4.player[game.p1.name].name;
  p4p[0].children[0].firstElementChild.style.color = game.p1.color;
  p4p[1].children[0].firstElementChild.textContent =
    p4.player[game.p2.name].name;
  p4p[1].children[0].firstElementChild.style.color = game.p2.color;

  p4p[2].children[0].firstElementChild.textContent = game.p3.name;
  p4p[2].children[0].firstElementChild.style.color = game.p3.color;
}

//在每個玩家屬性建立對手資料
function createOwnOpponent() {
  let p1 = game.p1;
  p1.player[game.p2.name] = {};
  p1.player[game.p2.name].name = game.p2.name;
  p1.player[game.p2.name].money = [];
  p1.player[game.p3.name] = {};
  p1.player[game.p3.name].name = game.p3.name;
  p1.player[game.p3.name].money = [];
  p1.player[game.p4.name] = {};
  p1.player[game.p4.name].name = game.p4.name;
  p1.player[game.p4.name].money = [];
  let p2 = game.p2;
  p2.player[game.p1.name] = {};
  p2.player[game.p1.name].name = game.p1.name;
  p2.player[game.p1.name].money = [];
  p2.player[game.p3.name] = {};
  p2.player[game.p3.name].name = game.p3.name;
  p2.player[game.p3.name].money = [];
  p2.player[game.p4.name] = {};
  p2.player[game.p4.name].name = game.p4.name;
  p2.player[game.p4.name].money = [];
  let p3 = game.p3;
  p3.player[game.p1.name] = {};
  p3.player[game.p1.name].name = game.p1.name;
  p3.player[game.p1.name].money = [];
  p3.player[game.p2.name] = {};
  p3.player[game.p2.name].name = game.p2.name;
  p3.player[game.p2.name].money = [];
  p3.player[game.p4.name] = {};
  p3.player[game.p4.name].name = game.p4.name;
  p3.player[game.p4.name].money = [];
  let p4 = game.p4;
  p4.player[game.p1.name] = {};
  p4.player[game.p1.name].name = game.p1.name;
  p4.player[game.p1.name].money = [];
  p4.player[game.p2.name] = {};
  p4.player[game.p2.name].name = game.p2.name;
  p4.player[game.p2.name].money = [];
  p4.player[game.p3.name] = {};
  p4.player[game.p3.name].name = game.p3.name;
  p4.player[game.p3.name].money = [];
}

// 建立 eventlistener 物件 ,點擊符合的ID顯示表單
var handler = function(e) {
  if (e.target.parentNode.nextElementSibling.id == "tryp1c") {
    document.getElementById("tryp1c").style.display = "block";
    document.getElementById("tryp1c").children[0].textContent = game.p2.name;
    document.getElementById("tryp1c").children[0].style.color = game.p2.color;
    document.getElementById("bet1").addEventListener("click", function() {
      document.getElementById(
        "bet1"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet1").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp2c") {
    document.getElementById("tryp2c").style.display = "block";
    document.getElementById("tryp2c").children[0].textContent = game.p3.name;
    document.getElementById("tryp2c").children[0].style.color = game.p3.color;
    document.getElementById("bet2").addEventListener("click", function() {
      document.getElementById(
        "bet2"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet2").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp3c") {
    document.getElementById("tryp3c").style.display = "block";
    document.getElementById("tryp3c").children[0].textContent = game.p4.name;
    document.getElementById("tryp3c").children[0].style.color = game.p4.color;
    document.getElementById("bet3").addEventListener("click", function() {
      document.getElementById(
        "bet3"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet3").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp4c") {
    document.getElementById("tryp4c").style.display = "block";
    document.getElementById("tryp4c").children[0].textContent = game.p1.name;
    document.getElementById("tryp4c").children[0].style.color = game.p1.color;
    document.getElementById("bet4").addEventListener("click", function() {
      document.getElementById(
        "bet4"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet4").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp5c") {
    document.getElementById("tryp5c").style.display = "block";
    document.getElementById("tryp5c").children[0].textContent = game.p3.name;
    document.getElementById("tryp5c").children[0].style.color = game.p3.color;
    document.getElementById("bet5").addEventListener("click", function() {
      document.getElementById(
        "bet5"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet5").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp6c") {
    document.getElementById("tryp6c").style.display = "block";
    document.getElementById("tryp6c").children[0].textContent = game.p4.name;
    document.getElementById("tryp6c").children[0].style.color = game.p4.color;
    document.getElementById("bet6").addEventListener("click", function() {
      document.getElementById(
        "bet6"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet6").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp7c") {
    document.getElementById("tryp7c").style.display = "block";
    document.getElementById("tryp7c").children[0].textContent = game.p1.name;
    document.getElementById("tryp7c").children[0].style.color = game.p1.color;
    document.getElementById("bet7").addEventListener("click", function() {
      document.getElementById(
        "bet7"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet7").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp8c") {
    document.getElementById("tryp8c").style.display = "block";
    document.getElementById("tryp8c").children[0].textContent = game.p2.name;
    document.getElementById("tryp8c").children[0].style.color = game.p2.color;
    document.getElementById("bet8").addEventListener("click", function() {
      document.getElementById(
        "bet8"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet8").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp9c") {
    document.getElementById("tryp9c").style.display = "block";
    document.getElementById("tryp9c").children[0].textContent = game.p4.name;
    document.getElementById("tryp9c").children[0].style.color = game.p4.color;
    document.getElementById("bet9").addEventListener("click", function() {
      document.getElementById(
        "bet9"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet9").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp10c") {
    document.getElementById("tryp10c").style.display = "block";
    document.getElementById("tryp10c").children[0].textContent = game.p1.name;
    document.getElementById("tryp10c").children[0].style.color = game.p1.color;
    document.getElementById("bet10").addEventListener("click", function() {
      document.getElementById(
        "bet10"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet10").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp11c") {
    document.getElementById("tryp11c").style.display = "block";
    document.getElementById("tryp11c").children[0].textContent = game.p3.name;
    document.getElementById("tryp11c").children[0].style.color = game.p3.color;
    document.getElementById("bet11").addEventListener("click", function() {
      document.getElementById(
        "bet11"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet11").value * game.bet.bet2;
    });
  } else if (e.target.parentNode.nextElementSibling.id == "tryp12c") {
    document.getElementById("tryp12c").style.display = "block";
    document.getElementById("tryp12c").children[0].textContent = game.p3.name;
    document.getElementById("tryp12c").children[0].style.color = game.p3.color;
    document.getElementById("bet12").addEventListener("click", function() {
      document.getElementById(
        "bet12"
      ).nextElementSibling.children[0].textContent =
        "+" + document.getElementById("bet12").value * game.bet.bet2;
    });
  }
};

// 關閉小卡
function disapear(n) {
  document.getElementById("wholeTable").removeEventListener("click", handler);
  switch (n) {
    case 1:
      document.getElementById("tryp1c").style.display = "none";
      game.stake = document.getElementById("bet1").value * game.bet.bet2;
      break;
    case 2:
      document.getElementById("tryp2c").style.display = "none";
      game.stake = document.getElementById("bet2").value * game.bet.bet2;
      break;
    case 3:
      document.getElementById("tryp3c").style.display = "none";
      game.stake = document.getElementById("bet3").value * game.bet.bet2;
      break;
    case 4:
      document.getElementById("tryp4c").style.display = "none";
      game.stake = document.getElementById("bet4").value * game.bet.bet2;
      break;
    case 5:
      document.getElementById("tryp5c").style.display = "none";
      game.stake = document.getElementById("bet5").value * game.bet.bet2;
      break;
    case 6:
      document.getElementById("tryp6c").style.display = "none";
      game.stake = document.getElementById("bet6").value * game.bet.bet2;
      break;
    case 7:
      document.getElementById("tryp7c").style.display = "none";
      game.stake = document.getElementById("bet7").value * game.bet.bet2;
      break;
    case 8:
      document.getElementById("tryp8c").style.display = "none";
      game.stake = document.getElementById("bet8").value * game.bet.bet2;
      break;
    case 9:
      document.getElementById("tryp9c").style.display = "none";
      game.stake = document.getElementById("bet9").value * game.bet.bet2;
      break;
    case 10:
      document.getElementById("tryp10c").style.display = "none";
      game.stake = document.getElementById("bet10").value * game.bet.bet2;
      break;
    case 11:
      document.getElementById("tryp11c").style.display = "none";
      game.stake = document.getElementById("bet11").value * game.bet.bet2;
      break;
    case 12:
      document.getElementById("tryp12c").style.display = "none";
      game.stake = document.getElementById("bet12").value * game.bet.bet2;
      break;
    default:
  }
}
function listMoneyOpponent() {
  console.log("1");
  listMoneyOpponent1();
  listMoneyOpponent2();
  listMoneyOpponent3();
  listMoneyOpponent4();
}
function listMoneyOpponent1() {
  for (let j = 0; j < 3; j++) {
    let k = j;
    let ol = document.getElementById("player_list1").children[k]
      .firstElementChild;
    while (ol.childNodes.length > 0) {
      ol.removeChild(ol.lastChild);
    }
    let col = game.p1.player[[game.name[k + 1]]].money;
    let frag = document.createDocumentFragment();
    for (i = 0; i < col.length; i++) {
      let list = document.createElement("li");
      let sub = document.createTextNode(col[i]);
      if (col[i] > 0) {
        list.style.color = "darkgreen";
      } else {
        list.style.color = "crimson";
      }
      list.appendChild(sub);
      frag.appendChild(list);
    }
    ol.appendChild(frag);
  }
}

function listMoneyOpponent2() {
  for (let j = 1; j < 4; j++) {
    let k = j - 1;
    let ol = document.getElementById("player_list2").children[k]
      .firstElementChild;
    while (ol.childNodes.length > 0) {
      ol.removeChild(ol.lastChild);
    }
    if (j > 1) {
      k = j;
    }
    console.log(k);
    let collection = game.p2.player[[game.name[k]]].money;
    let frag = document.createDocumentFragment();
    for (i = 0; i < collection.length; i++) {
      let list = document.createElement("li");
      let sub = document.createTextNode(collection[i]);
      if (collection[i] > 0) {
        list.style.color = "darkgreen";
      } else {
        list.style.color = "crimson";
      }
      list.appendChild(sub);
      frag.appendChild(list);
    }
    ol.appendChild(frag);
  }
}
function listMoneyOpponent3() {
  for (let j = 1; j < 4; j++) {
    let k = j - 1;
    let ol = document.getElementById("player_list3").children[k]
      .firstElementChild;
    while (ol.childNodes.length > 0) {
      ol.removeChild(ol.lastChild);
    }
    if (j > 2) {
      k = j;
    }
    console.log(k);
    let collection = game.p3.player[[game.name[k]]].money;
    let frag = document.createDocumentFragment();
    for (i = 0; i < collection.length; i++) {
      let list = document.createElement("li");
      let sub = document.createTextNode(collection[i]);
      if (collection[i] > 0) {
        list.style.color = "darkgreen";
      } else {
        list.style.color = "crimson";
      }
      list.appendChild(sub);
      frag.appendChild(list);
    }
    ol.appendChild(frag);
  }
}
function listMoneyOpponent4() {
  for (let j = 1; j < 4; j++) {
    let k = j - 1;
    let ol = document.getElementById("player_list4").children[k]
      .firstElementChild;
    while (ol.childNodes.length > 0) {
      ol.removeChild(ol.lastChild);
    }
    console.log(k);
    let collection = game.p4.player[[game.name[k]]].money;
    let frag = document.createDocumentFragment();
    for (i = 0; i < collection.length; i++) {
      let list = document.createElement("li");
      let sub = document.createTextNode(collection[i]);
      if (collection[i] > 0) {
        list.style.color = "darkgreen";
      } else {
        list.style.color = "crimson";
      }
      list.appendChild(sub);
      frag.appendChild(list);
    }
    ol.appendChild(frag);
  }
}
