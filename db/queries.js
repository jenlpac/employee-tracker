const connection = require('./connect');

class DB {
    // Ensure connection:
    constructor(connection) {
        this.connection = connection;
    }
    // Query to get all departments:
    getDepartments() {
        return this.connection.promise().query(
            `SELECT * FROM department;`
        );
    }
}

module.exports = new DB(connection);