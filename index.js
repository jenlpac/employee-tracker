const inquirer = require ('inquirer');

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
                
                break;
            case "View all roles":

                break;
            case "View all employees":

                break;
            case "Add a department":

                break;
            case "Add a role":

                break;
            case "Add an employee":

                break;
            case "Add an employee role":

                break;
        }
    })
};

start();
