import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When(
  "User scrolls to Sauce Labs Onesie and clicks it",
  async function () {
    const product = this.page.locator(
      '[data-test="inventory-item-name"]',
      { hasText: "Sauce Labs Onesie" }
    );

    // ✅ KEY LEARNING POINT
    await product.scrollIntoViewIfNeeded();
    await product.click();
  }
);

When(
  "User adds the product to cart",
  async function () {
    await this.page.getByRole("button", { name: "Add to cart" }).click();
  }
);

When(
  "User opens the cart",
  async function () {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
    await expect(this.page).toHaveURL(/cart.html/);
  }
);

When(
  "User proceeds to checkout",
  async function () {
    await this.page.getByRole("button", { name: "Checkout" }).click();
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
  }
);

When(
  "User enters checkout details and continues",
  async function () {
    await this.page.fill('[data-test="firstName"]', "John");
    await this.page.fill('[data-test="lastName"]', "Doe");
    await this.page.fill('[data-test="postalCode"]', "500001");
    await this.page.getByRole("button", { name: "Continue" }).click();
    await this.page.getByRole("button", { name: "Finish" }).click();
  }
);

Then(
  "Order should be placed successfully",
  async function () {
    await expect(
      this.page.getByText("Thank you for your order!")
    ).toBeVisible();
  }
);