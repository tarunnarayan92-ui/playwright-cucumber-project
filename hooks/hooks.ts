import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

setDefaultTimeout(60 * 1000); // ⬅️ 60 seconds (SDET-2 standard)

let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await this.page.close();
  await browser.close();
});