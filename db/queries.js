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
    // Query to get all roles:
    getRoles() {
        return this.connection.promise().query(
            `SELECT * FROM role;`
        );
    }
    // Query to get all employees:
    getEmployees() {
        return this.connection.promise().query(
            `SELECT * FROM employee;`
        );
    }
}

module.exports = new DB(connection);