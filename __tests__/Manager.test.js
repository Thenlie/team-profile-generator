const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('John', 1, 'john@fakemail.com');
    expect(manager.name).toBe('John')
    expect(manager.id).toBe(1)
    expect(manager.email).toBe('john@fakemail.com')
})