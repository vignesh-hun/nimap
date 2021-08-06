var express = require('express');
var app = express();
app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//  });
const route = require('./routes/route')
app.use('/',route)

var models = require('./model');
models.sequelize.sync().then(function () {
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
})

module.exports = app;




 