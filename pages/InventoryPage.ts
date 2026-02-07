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
}