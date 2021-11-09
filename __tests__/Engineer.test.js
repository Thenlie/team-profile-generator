const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('John', 1, 'john@fakemail.com', 'gitUser');
    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('get engineer role', () => {
    const engineer = new Engineer('John', 1, 'john@fakemail.com', 'gitUser');
    expect(engineer.getRole()).toBe('Engineer')
})

test('get engineer github', () => {
    const engineer = new Engineer('John', 1, 'john@fakemail.com', 'gitUser');
    expect(engineer.getGithub()).toBe(`https://github.com/${engineer.github}`)
})