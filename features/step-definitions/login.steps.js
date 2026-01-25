const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I open the browser', async function () {
  // Browser already opened in Before hook
});

When('I navigate to {string}', async function (url) {
  await this.page.goto(url);
});

Then('I should see the page title {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});