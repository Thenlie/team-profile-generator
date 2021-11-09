const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('John', 1, 'john@fakemail.com', 100);
    expect(manager.name).toBe('John')
    expect(manager.id).toBe(1)
    expect(manager.email).toBe('john@fakemail.com')
    expect(manager.officeNumber).toBe(100)
})

test('gets the manager role', () => {
    const manager = new Manager('John', 1, 'john@fakemail.com', 100);
    expect(manager.getRole()).toBe('Manager')
})