const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err=> {
//     if (err) throw err;

//     console.log('Porfolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
    {
        type:'input',
        name:'name',
        message: 'What is you name?'
    }
])
.then(answers => console.log(answers));