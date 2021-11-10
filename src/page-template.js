generateCard = employee => {
    return `
    <div class='name'>${employee.name}</div>
    <div class='id'>${employee.id}</div>
    <div class='email'>${employee.email}</div>
    `
}

module.exports = employees => {
    let cardArray = [];
    for (let i = 0; i < employees.length; i++) {
        cardArray += generateCard(employees[i]);
    }
    return `
    ${cardArray}
    `
}