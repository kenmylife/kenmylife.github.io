// Initialize Firebase
let config = {
  apiKey: "AIzaSyCVTJZhXZ3DBKOMzRUPG483YQbpSRfwjw4",
  authDomain: "mahjong-e17b4.firebaseapp.com",
  databaseURL: "https://mahjong-e17b4.firebaseio.com",
  projectId: "mahjong-e17b4",
  storageBucket: "mahjong-e17b4.appspot.com",
  messagingSenderId: "460760422238"
};
firebase.initializeApp(config);
let db = firebase.database(); //建立資料庫的連線

function read(date, player) {
  let ref = db.ref("/game");
  let data = [];
  ref.once("value", function(snapshots) {
    //注意此snapshots，為複數
    snapshots.forEach(function(snapshot) {
      //snapshot 物件為firebase包裝後的物件，不只有data還有其他資訊
      let game = snapshot.val(); //取得資料data裝進變數
      game.key = snapshot.key; //取得資料的key
      data.push(game);
    });
    search(date, player, data);
  });
}

function search(date, player, data) {
  let data2 = data.filter(function(x) {
    return (
      Math.abs(x.time - date) < 1000 * 86400 &&
      (x.game.p1.name == player ||
        x.game.p2.name == player ||
        x.game.p3.name == player ||
        x.game.p4.name == player)
    );
  });
  if (data2.length == 0) {
    alert("查無結果");
  } else {
    let result = [];
    for (let i = 0; i < data2.length; i++) {
      let obj = {
        time: null,
        p1: {},
        p2: {},
        p3: {},
        p4: {}
      };
      obj.time = new Date(data2[i].time).toLocaleDateString();
      obj.p1.name = data2[i].game.p1.name;
      obj.p1.money = data2[i].game.p1.total;
      obj.p2.name = data2[i].game.p2.name;
      obj.p2.money = data2[i].game.p2.total;
      obj.p3.name = data2[i].game.p3.name;
      obj.p3.money = data2[i].game.p3.total;
      obj.p4.name = data2[i].game.p4.name;
      obj.p4.money = data2[i].game.p4.total;
      result.push(obj);
    }
    console.log(result);
    create(result);
  }
}

let card = document.getElementById("card");

function create(result) {
  for (let i = 0; i < result.length; i++) {
    let frag = document.createDocumentFragment();
    let frag1 = document.createDocumentFragment();
    let table = document.createElement("table");
    let caption = document.createElement("caption");
    let date = document.createTextNode("日期" + result[0].time);

    caption.appendChild(date);
    let tr = document.createElement("tr");
    let tr1 = document.createElement("tr");

    for (let x in result[i]) {
      if (result[0][x].name == undefined) {
        continue;
      }
      console.log(x);
      console.log(result[i][x].name);
      let th = document.createElement("th");
      let td = document.createElement("td");
      let text = document.createTextNode(result[i][x].name);
      let text1 = document.createTextNode(result[i][x].money);
      th.appendChild(text);
      td.appendChild(text1);
      frag.appendChild(th);
      frag1.appendChild(td);
    }
    tr.appendChild(frag);
    tr1.appendChild(frag1);
    table.appendChild(caption);
    table.appendChild(tr);
    table.appendChild(tr1);
    card.appendChild(table);
  }
}
