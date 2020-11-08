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
    // Create new department:
    .then(response => {
        const name = response;
        db.createDepartment(name)
            .then(() => console.log(`Added ${name.name} to departments.`))
            .then(() => options());
    })
};

// Add new role:
function addRole() {
    // Get departments for role choices:
    db.getDepartments()
        .then(([rows, fields]) => {
            const departments = rows;
            const departmentList = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }))
        
            // Prompt for role data:
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of the new role?'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary of this role?'
                },
                {
                    type: 'list',
                    name: 'department_id',
                    choices: departmentList
                }
            ])
            // Create new role:
            .then(response => {
                const name = response;
                db.createRole(name)
                    .then(() => console.log(`Added ${name.title} to roles.`))
                    .then(() => options())
            })
        })
};

// Add new employee:
function addEmployee() {
    // Query roles for role choices:
    db.getRoles()
        .then(([rows, fields]) => {
            const roles = rows;
            const roleList = roles.map(({ id, title, salary, department_id }) => ({
                name: title,
                value: id
            }))
            // Query employees for manager choices:
            db.getEmployees()
                .then(([rows, fields]) => {
                    const employees = rows;
                    const employeeList = employees.map(({ id, first_name, last_name, role_id, manager_id }) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }))
                    // Add option for no manager:
                    employeeList.push({ name: 'None', value: null});
                    // Prompt for employee data:
                    inquirer.prompt([
                        // first name, last name, role id, manager id
                        {
                            type: 'input',
                            name: 'first_name',
                            message: "What is the new employee's first name?"
                        },
                        {
                            type: 'input',
                            name: 'last_name',
                            message: "What is this employee's last name?"
                        },
                        {
                            type: 'list',
                            name: 'role_id',
                            choices: roleList
                        },
                        {
                            type: 'list',
                            name: 'manager_id',
                            choices: employeeList
                        }
                    ])
                    // Create new role:
                    .then(response => {
                        const name = response;
                        db.createEmployee(name)
                            .then(() => console.log(`Added ${name.first_name} ${name.last_name} to employees.`))
                            .then(() => options())
                    })
                })
        })
};

// Update employee role:
function updateRole() {

};

start();
