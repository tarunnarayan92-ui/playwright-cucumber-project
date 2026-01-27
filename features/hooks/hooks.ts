import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000); // ⏱ prevent timeout issues

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  context = await browser.newContext();
  page = await context.newPage();

  this.page = page;
});

After(async function () {
  if (this.page && !this.page.isClosed()) {
    await this.page.close();
  }
  if (browser) {
    await browser.close();
  }
});