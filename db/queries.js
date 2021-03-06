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
    // Query to create a new department:
    createDepartment(department) {
        return this.connection.promise().query(
            `INSERT INTO department SET ?`, department
        )
    }
    // Query to create a new role:
    createRole(role) {
        return this.connection.promise().query(
            `INSERT INTO role SET ?`, role
        )
    }
    // Query to create a new employee:
    createEmployee(employee) {
        return this.connection.promise().query(
            `INSERT INTO employee SET ?`, employee
        )
    }
    // Query to update employee role:
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query(
            `UPDATE employee SET role_id = ? WHERE id = ?`,
            [roleId, employeeId]
        )
    }
}

module.exports = new DB(connection);