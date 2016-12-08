var express = require('express');

var app = express()

var autoprefixer = require('autoprefixer');
var postcss      = require('postcss');
// var css = require('./scss/main.scss');

// postcss([ autoprefixer ]).process(css).then(function (result) {
//     result.warnings().forEach(function (warn) {
//         console.warn(warn.toString());
//     });
//     console.log(result.css);
// });

app.use(express.static(__dirname));
app.use('*', function (req, res) {
  res.sendFile(__dirname+'/index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
