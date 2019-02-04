<!DOCTYPE html>
<?php
$date= $_REQUEST["date"]??"apple" ;
$name= $_REQUEST["name"]??"banana" ;
?>
<style>
      body {
        background-color: rgba(202, 178, 134, 0.705);
        font-family: "Noto Serif TC", serif;
      }
      .card {
        width: 200px;
        font-size: 1.5em;
        margin: 0 43.5% 0;
      }
      table {
        border: 1.5px solid black;
      }
      td,
      th {
        border: thin dotted #222222;
        padding: 6px;
        text-align: center;
      }
      caption {
        font-style: italic;
        font-weight: 500;
        font-size: 1.2em;
        padding-bottom: 5px;
      }
      table {
        margin-top: 8px;
      }
    </style>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>查詢結果</title>
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif+TC" rel="stylesheet">
  </head>
  <body>
    <div style="text-align:center;font-size:140%;margin-bottom:0px">
      <h1>查詢結果</h1>
    </div>
    <div class="card" id="card"></div>

    <script src="https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.7.3/firebase-database.js"></script>
    <script type="text/javascript" src="index3.js"></script>
    <script> 
      let date,name;
      date = "<?=$date ?>";
      name = "<?=$name ?>";
      let dat=new Date(date);
      console.log(dat.getTime());
     read(dat.getTime(),name);
    </script>
  </body>
</html>
