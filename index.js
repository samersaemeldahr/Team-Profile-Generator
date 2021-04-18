const jest = require("jest")
const fs = require("fs");
const Employee = require("./lib/employee")
const questions = require("./src/questions")


function init() {
    questions()
    // .then(answers => {
    //   let content = 
    //    writeToFile()
    // })
};

init();

module.exports = init