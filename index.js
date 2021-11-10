const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

const employees = [];

//get manager information
managerPrompt = () => {
    return inquirer
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
            return addEmployee();
        })
        .catch((error) => {
            console.log(error);
        });
}

//ask user if they want to add more employees
addEmployee = () => {
    return inquirer
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
                return employees;
            } else if (answer.userChoice === 'Engineer') {
                //run a function to create an engineer
                return engineerPrompt();
            } else if (answer.userChoice === 'Intern') {
                //run a function to create an intern
                return internPrompt();
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

//get engineer information
engineerPrompt = () => {
    return inquirer
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
            return addEmployee();
        })
        .catch((error) => {
            console.log(error);
        });
}

//get intern information
internPrompt = () => {
    return inquirer
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
            return addEmployee();
        })
        .catch((error) => {
            console.log(error);
        });
}

mockData = [ {
    name: 'Sam',
    id: '1',
    email: 'adsgkhadsg',
    officeNumber: '1234'
  }, {
    name: 'Sarah',
    id: '23',
    email: 'sdggasdgh',
    school: 'sddg'
  }, {
    name: 'dfshjgdfhj',
    id: '1234',
    email: 'dsgsdfbh',
    github: 'sdgswdfg'
  }]

managerPrompt()
    .then(employees => {
        return generatePage(employees);
    })
    .then(pageHTML => {
        console.log(pageHTML);
    })