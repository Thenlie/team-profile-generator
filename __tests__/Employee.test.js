const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets the employee name', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');
    expect(employee.getName()).toHaveProperty('name');
})

test('gets the employee ID', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');   
    expect(employee.getId()).toHaveProperty('id');
})

test('gets the employee email', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');  
    expect(employee.getEmail()).toHaveProperty('email');
})

test('gets the employee role', () => {
    const employee = new Employee('John', 1, 'john@fakemail.com');
    expect(employee.getRole()).toBe('Employee');
})