const { generateText } = require('./util');

test('name 과 age 출력', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});
