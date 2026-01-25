import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../hooks/hooks';

Given('I open the example website', async () => {
  await getPage().goto('https://example.com');
});

Then('I should see the example title', async () => {
  await expect(getPage()).toHaveTitle(/Example/);
});