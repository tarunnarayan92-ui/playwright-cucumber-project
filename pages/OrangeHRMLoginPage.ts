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
    let locator = this.page.locator(`a[href*="${network.toLowerCase()}.com"]`);
    if (network === 'YouTube') {
      locator = this.page.locator('a[href*="youtube.com"]');
    }
    
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      locator.click()
    ]);
    await newPage.waitForLoadState();
    await newPage.close();
  }
}
