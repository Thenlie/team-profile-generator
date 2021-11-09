const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('John', 1, 'john@fakemail.com', 'fakeSchool');
    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('get intern role', () => {
    const intern = new Intern('John', 1, 'john@fakemail.com', 'fakeSchool');
    expect(intern.getRole()).toBe('Intern');
})

test('get intern school', () => {
    const intern = new Intern('John', 1, 'john@fakemail.com', 'fakeSchool');
    expect(intern.getSchool()).toBe('fakeSchool');
})