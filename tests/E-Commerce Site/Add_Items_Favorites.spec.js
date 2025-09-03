const { test, expect } = require('@playwright/test');

test('Add Items Favorites', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/ecommerce-site', { waitUntil: 'networkidle' });
  console.log('Navigated to the Ecommerce-site login page.');

 // Locate link by text and click
  await page.locator('a:has-text("Visit Demo Site")').click();

  // Optional: Verify navigation
  await expect(page).toHaveURL('https://practice.qabrains.com/ecommerce/login');

    // Fill the email input
  await page.fill('#email', 'test@qabrains.com');

  // Fill the password input
await page.fill('#password', 'Password123');


  // Click the login button
await page.click('button.btn-submit');
 await page.waitForTimeout(5000)
 console.log('Login successful');

  await page.goto('https://practice.qabrains.com/ecommerce', { waitUntil: 'networkidle' });
  console.log('Navigated to the Ecommerce-site page.');

  
const favButtons = page.locator('div.products div.group span[role="button"] button');

// Click first product favourite
await favButtons.nth(0).click();

// Click second product favourite
await favButtons.nth(1).click();
console.log('Added to favorites');




});