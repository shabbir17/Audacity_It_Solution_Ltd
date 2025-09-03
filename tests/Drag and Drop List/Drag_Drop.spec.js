const { test, expect } = require('@playwright/test');

test('drag-drop', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/drag-drop', { waitUntil: 'networkidle' });
  console.log('Navigated to the drag-drop page.');

  // Locate the draggable element
  const dragItem = await page.locator('div[draggable="true"]');

  // Locate the drop target
  const dropTarget = await page.locator('div.max-w-96');

  // Perform drag and drop
  await dragItem.dragTo(dropTarget);


  const dropContent = await dropTarget.textContent();
  expect(dropContent).toContain('Drag Me'); 
});
