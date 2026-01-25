const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;
let context;
let page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // attach to cucumber world
});

After(async function () {
  await browser.close();
});