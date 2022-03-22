const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('name 과 age 출력', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('유효한 text 결과물 생성', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)')
});

test('텍스트 입력하여 요소 생성', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///D:/Javascript%20Test/javascript_testing_introduction/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Anna (28 years old)');
}, 10000);
