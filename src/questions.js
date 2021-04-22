const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's the team manager's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(">> Please enter a valid name <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What's the team manager's ID?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log(">> Please enter a valid number <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What's the team manager's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(">> Please enter a valid email address <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What's the team manager's office number?",
        validate: officeNumber => {
            if (officeNumber !== isNaN) {
                return true;
            } else {
                console.log(">> Please enter a valid phone number <<");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "teamMember",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want add any more team members"],
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's your engineer's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(">> Please enter a valid name <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What's your engineer's ID?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log(">> Please enter a valid number <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What's your engineer's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(">> Please enter a valid email address <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What's your engineer's GitHub username?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log(">> Please enter a valid username <<");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "teamMember",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want add any more team members"],
    }
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's your intern's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(">> Please enter a valid name <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What's your intern's ID?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log(">> Please enter a valid number <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What's your intern's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(">> Please enter a valid email address <<");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What's your intern's school?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log(">> Please enter a valid username <<");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "teamMember",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want add any more team members"],
    }
]



module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions
}