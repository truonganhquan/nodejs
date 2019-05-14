var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "quan",
    password: "123456",
    database: "quan"
  });
//console.log("ssssss");

con.connect();


/* GET users listing. */

router.get('/node', function(req, res){
      con.query("SELECT * FROM thcs where id = (select max(id) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});
router.get('/nodehummax', function(req, res){
      con.query("SELECT * FROM thcs where  Humidity = (select max(Humidity) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});
router.get('/nodehummin', function(req, res){
      con.query("SELECT * FROM thcs where  Humidity = (select min(Humidity) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});
router.get('/nodetempmax', function(req, res){
      con.query("SELECT * FROM thcs where  Temperature = (select max(Temperature) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});
router.get('/nodetempmin', function(req, res){
      con.query("SELECT * FROM thcs where  Temperature = (select min(Temperature) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});
router.get('/nodelightmax', function(req, res){
      con.query("SELECT * FROM thcs where  Light = (select max(Light) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});
router.get('/nodelightmin', function(req, res){
      con.query("SELECT * FROM thcs where  Light = (select min(Light) from thcs)", function (err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
      });
});


router.post('/led1', function(req, res){
	con.query(`insert into led(ledstatus) values(${req.body.signal})`, function (err, result, fields) {
      if (err) throw err;
      console.log("ssss");
  });
});

router.post('/controlled', function(req, res){
	con.query(`insert into slider(slidervalue) values(${req.body.pwm})`, function (err, result, fields) {
      if (err) throw err;
      console.log("ssss");
  });
});

module.exports = router;