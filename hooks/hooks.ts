import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit, Browser } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let browser: Browser;

Before(async function () {

  const browserName = process.env.BROWSER || "chromium";

  if (browserName === "firefox") {
    browser = await firefox.launch({ headless: false });
  } else if (browserName === "webkit") {
    browser = await webkit.launch({ headless: false });
  } else {
    browser = await chromium.launch({ headless: false });
  }

  const context = await browser.newContext();

  // START TRACE
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true
  });

  this.context = context;
  this.page = await context.newPage();

  // IMPORTANT — prevent navigation timeout issues
  this.page.setDefaultNavigationTimeout(60000);
  this.page.setDefaultTimeout(60000);
});

After(async function () {

  // STOP TRACE and SAVE
  await this.context.tracing.stop({
    path: `reports/trace-${Date.now()}.zip`
  });

  await this.page.close();
  await browser.close();
});