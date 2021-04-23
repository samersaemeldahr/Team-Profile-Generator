const jest = require("jest")
const fs = require("fs");
const Intern = require('./lib/intern');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer');
const questions = require("./src/questions")
const templates = require("./src/templates")
const inquirer = require('inquirer');
const path = require("path");
const Employee = require("./lib/employee");
const css = require("./src/css.js");

function addMember(choice) {
    
    inquirer.prompt(choice)
        .then((answer) => {

            //create new intern and engineer based on user's choice
            if (choice === questions.internQuestions) {
                var employee = new Intern(answer.name, answer.id, answer.email, answer.school);
            } else if (choice === questions.engineerQuestions) {
                var employee = new Engineer(answer.name, answer.id, answer.email, answer.github);
            }

            //append HTML choices
            fs.appendFile(`./dist/my-team.html`, templates(employee), (err) => {
                console.error(err)
            });

        })
}

function init () {

    // prompt the beginning of questions
    inquirer
    .prompt(questions.managerQuestions)
        .then((answer) => {
        //Add new manager
        let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);

        //write HTML file
        fs.writeFile(`./dist/my-team.html`, templates(manager), (err) => {
            console.error(err)
        })

        //write CSS file
        fs.writeFile(`./dist/style.css`, css(), (err) => {
            console.error(err)})

    })
}

init()