var mysql = require('mysql');
var connection = function(){
	return mysql.createConnection({
			host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_estudo'
    });
}

module.exports = function(){
	return connection;
}
