const inquirer = require ('inquirer');
const db = require('./db/queries');
require('console.table');

// Create app heading:
function start() {
    console.log("**********************************");
    console.log("*                                *");
    console.log("*        EMPLOYEE TRACKER        *");
    console.log("*                                *");
    console.log("**********************************");
    options();
}


function options() {
    // Prompt initial questions:
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        }
    ])
    // Call specific functions based on choices:
    .then(choice => {
        switch(choice.options) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateRole();
                break;
        }
    })
};

// View all departments:
function viewDepartments() {
    db.getDepartments()
        .then(([rows, fields]) => {
            const departments = rows;
            console.log('\n');
            console.table(departments);
        })
        .then(() => options());
};

// View all rolls:
function viewRoles() {

};

// View all employees:
function viewEmployees() {

};

// Add new department:
function addDepartment() {

};

// Add new role:
function addRole() {

};

// Add new employee:
function addEmployee() {

};

// Update employee role:
function updateRole() {

};

start();
