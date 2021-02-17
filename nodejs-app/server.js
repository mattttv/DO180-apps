var createError = require('html-errors');

var express = require('express');
app = express();

var os = require('os')


app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + os.hostname() + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

