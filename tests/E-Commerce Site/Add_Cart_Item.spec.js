const { test, expect } = require('@playwright/test');

test('Add Cart Item', async ({ page }) => {
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

  
// Select all "Add to cart" buttons
  const addToCartButtons = page.locator('button:has-text("Add to cart")');

  // Click the first product's "Add to cart"
  await addToCartButtons.nth(0).click();

  // Click the second product's "Add to cart"
  await addToCartButtons.nth(1).click();
  console.log('Added to cart');


    await page.goto('https://practice.qabrains.com/ecommerce/cart', { waitUntil: 'networkidle' });
  console.log('Navigated to the Ecommerce-cart page.');




});