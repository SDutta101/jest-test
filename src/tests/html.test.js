// Description:
// Verify that the webpage has a <header> section.

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

test('contains the <h1> tag', async () => {
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  
  const heading = await page.$('h1');
  expect(heading).toBeDefined();
});

