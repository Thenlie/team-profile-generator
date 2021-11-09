const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
    }
}

module.exports = Manager