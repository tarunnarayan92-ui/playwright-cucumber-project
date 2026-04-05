import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForLoadState("domcontentloaded");
  const fb = page.locator('a[href*="facebook.com"]');
  console.log("Facebook href:", await fb.getAttribute("href"));
  console.log("Facebook target:", await fb.getAttribute("target"));
  await browser.close();
})();
