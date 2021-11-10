//card for each employee
generateCard = employee => {
    if (employee.constructor.name === 'Manager'){
        return `
        <section class='card'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'>${employee.getRole()}</h2>
            <div class='id'>Employee ID: ${employee.id}</div>
            <div class='email'>Email <a href="mailto:${employee.email}">${employee.email}</a></div>
            <div class='info'>Office Number: ${employee.officeNumber}</div>
        </section>
        `
    } else if (employee.constructor.name === 'Engineer'){
        return `
        <section class='card'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'>${employee.getRole()}</h2>
            <div class='id'>Employee ID: ${employee.id}</div>
            <div class='email'>Email <a href="mailto:${employee.email}">${employee.email}</a></div>
            <div class='info'>GitHub: <a href="${employee.getGithub()}"> ${employee.github} </a></div>
        </section>
        `
    } else if (employee.constructor.name === 'Intern'){
        return `
        <section class='card'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'>${employee.getRole()}</h2>
            <div class='id'>Employee ID: ${employee.id}</div>
            <div class='email'>Email <a href="mailto:${employee.email}">${employee.email}</a></div>
            <div class='info'>School: ${employee.getSchool()}</div>
        </section>
        `
    }
}

//entire HTML export
module.exports = employees => {
    let cardArray = [];
    for (let i = 0; i < employees.length; i++) {
        cardArray += generateCard(employees[i]);
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="/dist/styles.css">
      <title>Team Profile Generator</title>
    </head>

    <body>
        <main>
            ${cardArray}
        </main>
    </body>
    </html>
    `
}