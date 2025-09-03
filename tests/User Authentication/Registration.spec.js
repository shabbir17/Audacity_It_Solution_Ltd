const { test, expect } = require('@playwright/test');

test('Registration', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/registration', { waitUntil: 'networkidle' });
  console.log('Navigated to the Registration page.');

  // Fill Name
  await page.waitForSelector('#name');
  await page.fill('#name', 'Shabbir Ajam Ulubbi');

  //  Select Country
  await page.waitForSelector('#country');
  await page.selectOption('#country', 'Bangladesh'); 

  //  Select Account Type
  await page.waitForSelector('#account');
  await page.selectOption('#account', 'Engineer'); 

  //  Fill Email
  await page.waitForSelector('#email');
  await page.fill('#email', 'shabbirajamulubbi@gmail.com');

  //  Fill Password
  await page.waitForSelector('#password');
  await page.fill('#password', 'Password123!');

  //  Fill Confirm Password
  await page.waitForSelector('#confirm_password');
  await page.fill('#confirm_password', 'Password123!');


  //  Click Signup button
  await page.waitForSelector('button.btn-submit');
  await page.click('button.btn-submit');
 await page.waitForTimeout(5000)
 console.log('Registration Successful');


});