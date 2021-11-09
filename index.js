const inquirer = require('inquirer');

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
            addEmployee();
        })
        .catch((error) => {
            console.log(error)
        });
}

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
                console.log('Done!')
            } else {
                console.log('Adding more!')
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

managerPrompt();
