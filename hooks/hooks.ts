import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";
import fs from "fs";

setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

const ensureDirs = () => {
  if (!fs.existsSync("reports")) fs.mkdirSync("reports");
  if (!fs.existsSync("reports/videos")) fs.mkdirSync("reports/videos");
};

Before(async function () {
  ensureDirs();

  const browserName = process.env.BROWSER || "chromium";
  const headlessMode = process.env.HEADLESS === "true";

  // 👇 slows actions ONLY when DEMO_MODE enabled
  const slowMo = process.env.DEMO_MODE === "true" ? 500 : 0;

  if (browserName === "firefox") {
    browser = await firefox.launch({ headless: headlessMode, slowMo });
  } else if (browserName === "webkit") {
    browser = await webkit.launch({ headless: headlessMode, slowMo });
  } else {
    browser = await chromium.launch({ headless: headlessMode, slowMo });
  }

  context = await browser.newContext({
    recordVideo: {
      dir: "reports/videos/",
      size: { width: 1280, height: 720 },
    },
  });

  await context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true,
  });

  page = await context.newPage();

  page.setDefaultNavigationTimeout(60000);
  page.setDefaultTimeout(60000);

  this.browser = browser;
  this.context = context;
  this.page = page;
});

After({ timeout: 120 * 1000 }, async function (scenario) {
  const timestamp = Date.now();

  if (scenario.result?.status === "FAILED") {
    await context.tracing.stop({
      path: `reports/trace-${timestamp}.zip`,
    });
  } else {
    await context.tracing.stop();
  }

  await page.close();
  await context.close();
  await browser.close();
});
