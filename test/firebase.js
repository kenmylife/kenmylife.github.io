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

function upload(output) {
  let ref = db.ref("/game/");
  ref.push(output, function(error) {
    if (error) {
      alert("error");
    } else {
      alert("ok");
      location.reload();
    }
  });
}

// function save() {
//   let name = document.getElementById("name").value;
//   let content = document.getElementById("content").value;
//   let time = new Date().getTime(); //取得當前的時間
//   //放進資料庫
//   /*
//   let ref = db.ref("/massage/" + time);//可以用時間來建立序列
//    ref.set({ name: name, content: content, time: time }, function(error) {
//      if (error) {
//        alert("error");
//      } else {
//        alert("ok");
//      }
//    });
// */
//   let ref = db.ref("/massage/"); //或是用 firebase提供的功能
//   //用push方法，來達成列表式資料(firebase會自動產生獨立的key)
//   ref.push({ name: name, content: content, time: time }, function(error) {
//     if (error) {
//       alert("error");
//     } else {
//       alert("ok");
//     }
//   });
// }
// function read() {}

// function remove() {}
