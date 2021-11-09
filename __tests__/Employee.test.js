test('create employee object', () => {
    const employee = new Employee('John');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets the employee name', () => {
    const employee = new Employee('John');
    
    expect(employee.getName()).toHaveProperty('name');
})