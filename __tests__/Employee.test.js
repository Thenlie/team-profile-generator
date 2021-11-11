const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('john@fakemail.com');
})

test('get the employee name', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');
    expect(employee.getName()).toHaveProperty('name');
})

test('get the employee ID', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');   
    expect(employee.getId()).toHaveProperty('id');
})

test('get the employee email', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');  
    expect(employee.getEmail()).toHaveProperty('email');
})

test('get the employee role', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');
    expect(employee.getRole()).toBe('Employee');
})