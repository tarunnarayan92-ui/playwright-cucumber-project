import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async addProducts(count: number) {
    const buttons = this.page.locator('button:has-text("Add to cart")');
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
  }

  async removeFirstProduct() {
    await this.page.locator('button:has-text("Remove")').first().click();
  }

  async openMenu() {
    await this.page.locator("#react-burger-menu-btn").click();
  }

  async clickLogout() {
    await this.page.locator("#logout_sidebar_link").click();
  }

  async selectSort(optionValue: string) {
    await this.page
      .locator('[data-test="product-sort-container"]')
      .selectOption(optionValue);
  }
}