/**
 * Created by yehyaawad on 3/5/16.
 */

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

//setup the root path
var root = __dirname;

var app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  fs.readFile('index.html', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.use('/node_modules', express.static('node_modules'));

app.listen(3000,'10.101.192.67' || 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  }
);