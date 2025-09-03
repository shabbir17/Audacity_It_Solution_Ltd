const { test, expect } = require('@playwright/test');

test('Valid LogIn', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/', { waitUntil: 'networkidle' });
  console.log('Navigated to the login page.');

 // Fill the email input
  await page.waitForSelector('#email');
  await page.fill('#email', ' qa_testers@qabrains.com');

  // Fill the password input
  await page.waitForSelector('#password');
  await page.fill('#password', 'Password123'); 



  // Click the Login button
  await page.waitForSelector('button.btn-submit');
  await page.click('button.btn-submit');
 await page.waitForTimeout(5000)
 console.log('Login successful');


});