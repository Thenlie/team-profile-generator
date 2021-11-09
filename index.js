const inquirer = require('inquirer');

//get manager information
managerPrompt = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the team manager's name"
            }, {
                type: 'input',
                name: 'managerId',
                message: "Please enter the team manager's employee ID number"
            }, {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the team manager's email address"
            }
        ])
        .then((answers) => {
            console.log(answers);
            //create a new manager object with answers
            //then run function to see if user wants to add more employees
            addEmployee();
        })
        .catch((error) => {
            console.log(error)
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
                console.log('Done!')
            } else {
                //run a function to create an engineer or intern
                console.log('Adding more!')
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

managerPrompt();
