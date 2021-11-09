const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('John', 1, 'john@fakemail.com', 100);
    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toBe(100);
})

test('get the manager role', () => {
    const manager = new Manager('John', 1, 'john@fakemail.com', 100);
    expect(manager.getRole()).toBe('Manager');
})