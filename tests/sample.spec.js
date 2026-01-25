const { test, expect } = require('@playwright/test');

test('sample', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});