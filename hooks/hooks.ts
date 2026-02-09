import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit, Browser } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;

Before(async function () {
  const browserName = this.parameters.browser;

  if (browserName === "firefox") {
    browser = await firefox.launch({ headless: false });
  } else if (browserName === "webkit") {
    browser = await webkit.launch({ headless: false });
  } else {
    browser = await chromium.launch({ headless: false });
  }

  const context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await this.page.close();
  await browser.close();
});
