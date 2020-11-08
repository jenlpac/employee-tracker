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
            console.table(departments);
        })
        .then(() => options());
};

// View all roles:
function viewRoles() {
    db.getRoles()
        .then(([rows, fields]) => {
            const roles = rows;
            console.table(roles);
        })
        .then(() => options());
};

// View all employees:
function viewEmployees() {
    db.getEmployees()
        .then(([rows, fields]) => {
            const employees = rows;
            console.table(employees);
        })
        .then(() => options());
};

// Add new department:
function addDepartment() {
    // Prompt for data:
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new department?'
        }
    ])
    .then(response => {
        const name = response;
        db.createDepartment(name)
            .then(() => console.log(`Added ${name.name} to the database`))
            .then(() => options());
    })
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
