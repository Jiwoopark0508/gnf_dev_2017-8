var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
  console.log("!");
  var filePath = path.join(__dirname, '/../public/markdowns/main.md');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(data);
  });
});

router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  var filePath = path.join(__dirname, `/../public/markdowns/team${id}.md`);
  fs.readFile(filePath, 'utf8', function(err, data) {
    if(err) {
      console.log(err);
      res.sendStatus(404);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(data);
  });
});

module.exports = router;
