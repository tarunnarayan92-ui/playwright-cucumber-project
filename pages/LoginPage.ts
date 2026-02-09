import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.clickLogin();
  }

  async clickLogin() {
    // stable locator for all browsers
    await this.page.locator('[data-test="login-button"]').click();
  }
}
