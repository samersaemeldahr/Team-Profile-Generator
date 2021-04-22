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

// // function writeToFile(data) {
// //     fs.writeFile('./dist/index.html', data, (err) =>
// //         err ? console.log(err) : console.log('Successfully created README.md!')
// //       );
// //       fs.writeFile('./dist/style.css', data, (err) =>
// //         err ? console.log(err) : console.log('Successfully created css')
// //       );
// //   }


// // function init() {
// //         questions.askQuestions()
// //         .then(function(data) {
// //             let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
// //             let content = templates(manager)
// //             writeToFile(content)
// //         })

// //     // .then(answers => {
// //     //   let content = 
// //     //    writeToFile()
// //     // })
// // };

// var fileName
// function addMember(choice) {
//     inquirer
//         .prompt(choice)
//         .then((data) => {
//             //creates new engineer or intern objects based on user responses
//             if (choice === questions.engineerQuestions) {
//                 var employee = new Engineer(data.name, data.id, data.email, data.github);
//             } else if (choice === questions.internQuestions) {
//                 var employee = new Intern(data.name, data.id, data.email, data.school);
//             }
//             // adds the new employee object's template to the html file
//             fs.appendFile(fileName, templates(employee), (err) => {
//                 console.error(err)
//             });
//             //recursively calls this function if user decides to add more team members
//             //or adds final html template
//             if (data.choice === 'Engineer') {
//                 addMember(questions.engineerQuestions)
//             } else if (data.choice === 'Intern') {
//                 addMember(questions.internQuestions)
//             } else {
//                 fs.appendFile(fileName, templates(), (err) => {
//                     console.error(err)
//                 })
//             }

//         })
// }
// function init () {

//     inquirer
//     .prompt(questions.managerQuestions)
//         .then((data) => {
//         //creates new manager object and a filename from the manager's name
//         let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
//         fileName = `./dist/${data.name}.html`
//         //creates new html file
//         fs.writeFile(fileName, templates(manager), (err) => {
//             console.error(err)
//         })
//         //creates new employee html card based on user response
//         if (data.choice === 'Engineer') {
//             addMember(questions.engineerQuestions)
//         } else if (data.choice === 'Intern') {
//             addMember(questions.internQuestions)
//         } else {
//             fs.appendFile(fileName, templates(), (err) => {
//                 console.error(err)
//             })
//         }
//     })
// }


// function addMember(choice) {
//     inquirer.prompt(choice)
//         .then((data) => {
//             //creates new engineer or intern objects based on user responses
//             if (choice === questions.internQuestions) {
//                 var employee = new Intern(data.name, data.id, data.email, data.school);
//             } else if (choice === questions.engineerQuestions) {
//                 var employee = new Engineer(data.name, data.id, data.email, data.github);
//             }
//             // adds the new employee object's template to the html file
//             fs.appendFile(`./dist/my-team.html`, templates(employee), (err) => {
//                 console.error(err)
//             });
//             //recursively calls this function if user decides to add more team members
//             //or adds final html template
//             if (data.choice === "Engineer") {
//                 addMember(questions.engineerQuestions)
//             } else if (data.choice === "Intern") {
//                 addMember(questions.internQuestions)
//             } else {
//                 fs.appendFile(`./dist/my-team.html`, templates(), (err) => {
//                     console.error(err)
//                 })
//             }

//         })
// }


function init () {

    inquirer
    .prompt(questions.managerQuestions)
        .then((data) => {
        //Add new manager
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);

        //write HTML file
        fs.writeFile(`./dist/my-team.html`, templates(manager), (err) => {
            console.error(err)
        })

        //write CSS file
        fs.writeFile(`./dist/style.css`, css(), (err) => {
            console.error(err)})

        
        // //creates new employee html card based on user response
        // if (data.choice === 'Engineer') {
        //     addMember(questions.engineerQuestions)
        // } else if (data.choice === 'Intern') {
        //     addMember(questions.internQuestions)
        // } else {
        //     fs.appendFile(`./dist/my-team.html`, templates(), (err) => {
        //         console.error(err)
        //     })
        // }
    })
}

init()