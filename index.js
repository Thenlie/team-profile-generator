const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

//get manager information
managerPrompt = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the team manager's name"
            }, {
                type: 'input',
                name: 'id',
                message: "Please enter the team manager's employee ID number"
            }, {
                type: 'input',
                name: 'email',
                message: "Please enter the team manager's email address"
            }, {
                type: 'input',
                name: 'officeNum',
                message: "Please enter the team manager's office number"
            }
        ])
        .then((answers) => {
            //create a new manager object with answers and push to employees array
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            employees.push(manager);
            //then run function to see if user wants to add more employees
            addEmployee();
        })
        .catch((error) => {
            console.log(error);
        });
}

//ask user if they want to add more employees
addEmployee = function() {
    inquirer
        .prompt({
                type: 'list',
                name: 'userChoice',
                message: 'Would you like to add an Engineer or Intern to the team?',
                choices: ['Engineer', 'Intern', 'Finish Building Team'],
                default: ['Finish Building Team']
        })
        .then((answer) => {
            if (answer.userChoice === 'Finish Building Team') {
                //build the HTML file with current employees
                console.log('Done!');
                console.log(employees);
            } else if (answer.userChoice === 'Engineer') {
                //run a function to create an engineer
                engineerPrompt();
            } else if (answer.userChoice === 'Intern') {
                //run a function to create an intern
                internPrompt();
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

//get engineer information
engineerPrompt = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the engineer's name"
            }, {
                type: 'input',
                name: 'id',
                message: "Please enter the engineer's employee ID number"
            }, {
                type: 'input',
                name: 'email',
                message: "Please enter the engineer's email address"
            }, {
                type: 'input',
                name: 'github',
                message: "Please enter the engineer's GitHub username"
            }
        ])
        .then((answers) => {
            //create a new engineer object with answers and push to employees array
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); 
            employees.push(engineer);
            //then run function to see if user wants to add more employees
            addEmployee();
        })
        .catch((error) => {
            console.log(error);
        });
}

//get intern information
internPrompt = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the intern's name"
            }, {
                type: 'input',
                name: 'id',
                message: "Please enter the intern's employee ID number"
            }, {
                type: 'input',
                name: 'email',
                message: "Please enter the intern's email address"
            }, {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school name"
            }
        ])
        .then((answers) => {
            //create a new intern object with answers and push to employees array
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
            //then run function to see if user wants to add more employees
            addEmployee();
        })
        .catch((error) => {
            console.log(error);
        });
}

managerPrompt();
