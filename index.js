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
    ]).then(function () {
        teamMember()
    })
}


function teamMember() {
    inquirer.prompt(
        {
            type: "list",
            name: "addMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want add any more team members"],
        }
    ).then(data => {
        if (data.addMember === "Engineer") {
            engineerQuestions()
        } else if (data.addMember === "Intern") {
            internQuestions()
        } else {
            init();
        }
    })
}


function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What's your engineer's name?",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log(">> Please enter a valid name <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's your engineer's ID?",
            validate: engineerId => {
                if (engineerId) {
                    return true;
                } else {
                    console.log(">> Please enter a valid number <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's your engineer's email?",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log(">> Please enter a valid email address <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's your engineer's GitHub username?",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log(">> Please enter a valid username <<");
                    return false;
                }
            }
        },
    ]).then(function () {
        teamMember()
    })
}


function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What's your intern's name?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log(">> Please enter a valid name <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What's your intern's ID?",
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log(">> Please enter a valid number <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's your intern's email?",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log(">> Please enter a valid email address <<");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What's your intern's school?",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log(">> Please enter a valid username <<");
                    return false;
                }
            }
        },
    ]).then(function () {
        teamMember()
    })
}






function init() {
    askQuestions()
    // .then(answers => {
    //   let content = 
    //    writeToFile()
    // })
};

init();