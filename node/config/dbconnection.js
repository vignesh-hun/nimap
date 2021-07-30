var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'nimap',
    port: 3306,
    insecureAuth : true
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
}

exports.getConnection = getConnection;