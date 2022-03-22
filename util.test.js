const { generateText, checkAndGenerate } = require('./util');

test('name 과 age 출력', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('유효한 text 결과물 생성', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)')
});
