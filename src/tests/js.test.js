// Description:
// Verify that the h1 tag content changed.

const puppeteer = require('puppeteer');

let browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
        executablePath: process.env.CHROMIUM_PATH,
        args: ['--no-sandbox'], // This was important. Can't remember why
      });
});

afterAll(async () => {
  await browser.close();
});

test('h1 tag content changed', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  
  const h1Handle = await page.$('h1');
  await h1Handle.click();
  const content = await page.evaluate(() => document.querySelector('h1').innerText);
  expect(content).toBe('Paragraph changed 1.');
});
