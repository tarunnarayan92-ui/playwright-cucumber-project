import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async goToCheckout() {
    await this.page.getByRole("button", { name: "Checkout" }).click();
  }

  async continueShopping() {
    await this.page.locator('[data-test="continue-shopping"]').click();
  }
}