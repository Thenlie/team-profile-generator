const fs = require('fs');

const writeFile = pageHTML => {
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw err;
        console.log('The HTML has been created!')
    })
}

module.exports = { writeFile };