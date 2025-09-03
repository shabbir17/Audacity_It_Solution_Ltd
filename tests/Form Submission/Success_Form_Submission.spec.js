const { test, expect } = require('@playwright/test');

test('Form Submission', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/form-submission', { waitUntil: 'networkidle' });
  console.log('Navigated to the Form Submission page.');

  // Fill the name input
  await page.waitForSelector('#name');
  await page.fill('#name', 'Shabbir Ajam Ulubbi');

  // Email
  await page.waitForSelector('#email');
  await page.fill('#email', 'shabbirajamulubbi@gmail.com');

  // Contact
  await page.waitForSelector('#contact');
  await page.fill('#contact', '01646743858');

  // Set the date (format: YYYY-MM-DD)
  await page.waitForSelector('#date');
  await page.fill('#date', '2025-09-05');

  // Upload File
  const filePath = 'C:\\Users\\SS TECHNOLOGY BD\\Downloads\\image.png';

  // Upload the file
  await page.setInputFiles('#file', filePath);

  // Verify uploaded file name
  const uploadedFileName = await page.$eval('#file', input => input.files[0].name);
  expect(uploadedFileName).toBe('image.png');

  // Colors
  await page.waitForSelector('#Green');
  await page.check('#Green');

  // Menu
  await page.waitForSelector('#Pasta');
  await page.check('#Pasta');   
  await page.waitForSelector('#Pizza');
  await page.check('#Pizza');  

  // Country
  await page.waitForSelector('#country');
  await page.selectOption('#country', 'Bangladesh');

  // Submit
  await page.waitForSelector('button.btn-submit');
  await page.click('button.btn-submit');
   await page.waitForTimeout(5000)
 console.log('Form submit successfully.');
});



