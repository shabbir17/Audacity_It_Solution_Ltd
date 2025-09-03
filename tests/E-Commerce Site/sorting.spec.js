const { test, expect } = require('@playwright/test');

test('Sorting', async ({ page }) => {
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

// Locate the dropdown button
const dropdown = page.locator('button[data-slot="popover-trigger"]');

// Open the dropdown if it's closed
if ((await dropdown.getAttribute('data-state')) === 'closed') {
    await dropdown.click();
    await page.waitForTimeout(500);
}

// Click "Low to High"
const lowToHigh = page.locator('text=Low to High (Price)');
await lowToHigh.click();
await page.waitForTimeout(5000); 

// Re-open dropdown
if ((await dropdown.getAttribute('data-state')) === 'closed') {
    await dropdown.click();
    await page.waitForTimeout(500);
}

// Click "High to Low"
const highToLow = page.locator('text=High to Low (Price)');
await highToLow.click();
await page.waitForTimeout(5000); 



});