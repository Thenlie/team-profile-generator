const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager