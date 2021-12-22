/** Remember to insert this file into .gitignore */
var mysql = require('mysql');

var connection = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
});
module.exports = { connection }
