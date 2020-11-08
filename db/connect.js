// Get the client:
const mysql = require('mysql2');

// Create the connection to database:
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$grey13waterOrchid88*',
    database: 'employee_db'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the server.');
});

module.exports = connection;