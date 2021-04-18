const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee")

function askQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What's the team manager's name?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log(">> Please enter a valid name <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the team manager's ID?",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log(">> Please enter a valid number <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the team manager's email?",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log(">> Please enter a valid email address <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What's the team manager's office number?",
            validate: managerNumber => {
                if (managerNumber !== isNaN) {
                    return true;
                } else {
                    console.log(">> Please enter a valid phone number <<");
                    return false;
                }
            }
        },

        teamMember()
    ])
}

function teamMember(data) {
    inquirer.prompt(
        {
            type: "list",
            name: "addMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want add any more team members"],
        }
    ).then(data => {
        switch (data) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default:
                init();
        }
    })
}





function init() {
    inquirer.prompt(questions)
        .then(answers => {
            //   let content = 
            //    writeToFile()
        })
};

init();