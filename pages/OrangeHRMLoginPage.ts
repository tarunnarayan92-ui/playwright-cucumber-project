import { Page, expect } from "@playwright/test";

export class OrangeHRMLoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: /login/i }).click();
  }

  async clickForgotPassword() {
    await this.page.getByText("Forgot your password?").click();
    await this.page.waitForLoadState("domcontentloaded");
    // navigate back to login page to continue other clicks
    await this.page.goBack();
  }

  async clickOrangeHrmInc() {
    const pagePromise = this.page.context().waitForEvent('page');
    await this.page.locator('a[href*="orangehrm.com"]').click();
    const newPage = await pagePromise;
    await newPage.close();
  }

  async clickSocialLink(network: string) {
    const pagePromise = this.page.context().waitForEvent('page');
    if (network === 'LinkedIn') {
      await this.page.locator('a[href*="linkedin.com"]').click();
    } else if (network === 'Facebook') {
      await this.page.locator('a[href*="facebook.com"]').click();
    } else if (network === 'Twitter') {
      await this.page.locator('a[href*="twitter.com"]').click();
    } else if (network === 'YouTube') {
      await this.page.locator('a[href*="youtube.com"]').click();
    }
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await newPage.close();
  }
}
