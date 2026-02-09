import { Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async completeCheckout(first: string, last: string, zip: string) {
    await this.page.getByRole("button", { name: "Checkout" }).click();
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.getByRole("button", { name: "Continue" }).click();
    await this.page.getByRole("button", { name: "Finish" }).click();
  }

  async checkoutWithoutFirstName() {
    await this.page.getByRole("button", { name: "Checkout" }).click();
    await this.page.fill('[data-test="lastName"]', "Doe");
    await this.page.fill('[data-test="postalCode"]', "500001");
    await this.page.getByRole("button", { name: "Continue" }).click();
  }
}
