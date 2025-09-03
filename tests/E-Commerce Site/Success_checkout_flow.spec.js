const { test, expect } = require('@playwright/test');

test('Success Checkout Flow', async ({ page }) => {
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

  // Locate the checkout button
const checkoutButton = page.locator('button:has-text("Checkout")');

// Click it
await checkoutButton.click();


 await page.goto('https://practice.qabrains.com/ecommerce/checkout-info', { waitUntil: 'networkidle' });
  console.log('Navigated to the CheckOut-info page.');


  // Locate the First Name input field by placeholder
const firstNameInput = page.locator('input[placeholder="Ex. John"]');

// Fill in a name
await firstNameInput.fill('Shabbir');


// Locate the Last Name input field by placeholder
const lastNameInput = page.locator('input[placeholder="Ex. Doe"]');

// Fill in a last name
await lastNameInput.fill('Ajam Ulubbi');

// Locate the Zip Code input field
const zipCodeInput = page.locator('input[value="1207"]');

// Fill in a new zip code (optional)
await zipCodeInput.fill('1216');


// Locate the "Continue" button by its text
const continueButton = page.locator('button', { hasText: 'Continue' });

// Click the button
await continueButton.click();


 await page.goto('https://practice.qabrains.com/ecommerce/checkout-overview', { waitUntil: 'networkidle' });
  console.log('Navigated to the checkout-overview page.');


  // Locate the "Finish" button by its text
const finishButton = page.locator('button', { hasText: 'Finish' });

// Click the button
await finishButton.click();
 console.log('Thank you for your order!');


});