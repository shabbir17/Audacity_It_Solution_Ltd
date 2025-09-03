const { test, expect } = require('@playwright/test');

test('LogIn', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/forgot-password', { waitUntil: 'networkidle' });
  console.log('Navigated to the Forget Password page.');

 
  // email input and fill it
  await page.waitForSelector('#email');
  await page.fill('#email', 'shabbirajamulubbi@gmail.com');

  // Click the Reset Password button
  await page.waitForSelector('button.btn-submit');
  await page.click('button.btn-submit');
 await page.waitForTimeout(5000)
 console.log('Password is reset successfully.');


});