const inquirer = require ('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

function start() {
    console.log("**********************************");
    console.log("*                                *");
    console.log("*        EMPLOYEE TRACKER        *");
    console.log("*                                *");
    console.log("**********************************");
    options();
}


function options() {
    
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

function viewDepartments() {
    
};

function viewRoles() {

};

function viewEmployees() {

};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateRole() {

};

start();
