import { Page, expect } from "@playwright/test";

export class OrangeHRMDashboardPage {
  constructor(private page: Page) {}

  async verifyDashboard() {
    await this.page.waitForURL(/.*dashboard.*/);
    await expect(this.page).toHaveURL(/.*dashboard.*/);
  }

  async clickSideMenuItem(itemName: string) {
    // In OrangeHRM the side menu items are generally matching the exact text
    // Example: <span class="oxd-text oxd-text--span oxd-main-menu-item--name">Admin</span>
    await this.page.locator('.oxd-main-menu-item').filter({ hasText: itemName }).click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}
