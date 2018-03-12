var express = require("express");
var app = express();
var mysql = require('mysql');
var mysqlbase = require('./mysql.js');
// 请求跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var connection = mysql.createConnection(mysqlbase);
 
connection.connect();

var data = "";

connection.query('SELECT * FROM goods', function (error, results, fields) {
  if (error){
      console.log(error);
  }
//   console.log('The solution is: ', results);
  data = results;
});
// app.use(express.static("./public"));

app.get("/news",function(req,res){
    res.json(data);
})

app.listen(9999)