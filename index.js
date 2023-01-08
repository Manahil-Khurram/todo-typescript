"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var todoList = [];
var loop = true;
while (loop) {
    var answers = await inquirer_1["default"].prompt([
        {
            type: 'input',
            name: 'TODO',
            message: 'What do you want to add in your todo? '
        },
        {
            type: 'confirm',
            name: 'addmore',
            message: 'Do you want to add more todo? ',
            "default": false
        }
    ]);
    var TODO = answers.TODO, addmore = answers.addmore;
    loop = addmore;
    if (TODO) {
        todoList.push(TODO);
    }
    else {
        console.log("Enter Valid Input");
    }
}
if (todoList.length > 0) {
    console.log("Your Todo List:");
    todoList.map(function (eachItem) {
        console.log(eachItem);
    });
}
else {
    console.log('No Data Found');
}
