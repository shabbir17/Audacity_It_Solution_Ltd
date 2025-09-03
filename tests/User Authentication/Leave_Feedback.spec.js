const { test, expect } = require('@playwright/test');

test('LogIn & Leave Feedback', async ({ page }) => {

  await page.goto('https://qabrains.com/auth/login', { waitUntil: 'networkidle' });
  console.log('Navigated to the login page.');

  //  Wait for the email input to appear
  await page.waitForSelector('input[name="email"]');

  // Fill the email field
  await page.fill('input[name="email"]', 'automationengineer04@gmail.com');

    // Wait for the password input to appear
  await page.waitForSelector('input[name="password"]');

  //  Fill the password field
  await page.fill('input[name="password"]', '123456789@#Shabbir');


 await page.waitForSelector('button:has-text("Sign In")', { state: 'visible' });
await page.click('button:has-text("Sign In")');

await page.waitForTimeout(2000)



  await page.goto('https://practice.qabrains.com/', { waitUntil: 'networkidle' });


 // Wait for the textarea to appear
  await page.waitForSelector('textarea[placeholder="Write Comment..."]');

  // Fill the textarea
  await page.fill('textarea[placeholder="Write Comment..."]', 'This is a test comment.'); 

  // Define a precise selector for the button
  const buttonSelector = 'button[data-slot="dialog-trigger"]';

  // Wait for the button to become visible and enabled
  await page.waitForSelector(buttonSelector, { state: 'visible' });

  await page.waitForFunction(selector => {
    const btn = document.querySelector(selector);
    return btn && !btn.disabled;
  }, buttonSelector);

  // Click the button
  await page.click(buttonSelector);


});