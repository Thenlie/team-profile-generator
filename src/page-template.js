//card for each employee
generateCard = employee => {
    if (employee.constructor.name === 'Manager'){
        return `
        <section class='card'>
            <div class='card-header'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'><i class="bi bi-clipboard-check"></i> ${employee.getRole()}</h2>
            </div>
            <ul class='list-group list-group-flush'>
            <li class='id list-group-item'>Employee ID: ${employee.id}</li>
            <li class='email list-group-item'>Email <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class='info list-group-item'>Office Number: ${employee.officeNumber}</li>
            </ul>
        </section>
        `
    } else if (employee.constructor.name === 'Engineer'){
        return `
        <section class='card'>
            <div class='card-header'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'><i class="bi bi-wrench"></i> ${employee.getRole()}</h2>
            </div>
            <ul class='list-group list-group-flush'>
            <li class='id list-group-item'>Employee ID: ${employee.id}</li>
            <li class='email list-group-item'>Email <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class='info list-group-item'>GitHub: <a href="${employee.getGithub()}"> ${employee.github} </a></li>
            </ul>
        </section>
        `
    } else if (employee.constructor.name === 'Intern'){
        return `
        <section class='card'>
            <div class='card-header'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'><i class="bi bi-mortarboard-fill"></i> ${employee.getRole()}</h2>
            </div>
            <ul class='list-group list-group-flush'>
            <li class='id list-group-item'>Employee ID: ${employee.id}</li>
            <li class='email list-group-item'>Email <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class='info list-group-item'>School: ${employee.getSchool()}</li>
            </ul>
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./styles.css">
      <title>Team Profile Generator</title>
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${cardArray}
        </main>
    </body>
    </html>
    `
}