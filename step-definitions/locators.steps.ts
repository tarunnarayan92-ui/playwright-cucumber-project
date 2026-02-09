import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("User clicks Sauce Labs Bolt T-Shirt using getByText", async function () {
  await this.page
    .locator('[data-test="inventory-item-name"]', {
      hasText: "Sauce Labs Bolt T-Shirt",
    })
    .click();
});

When("User clicks Add to cart using getByRole", async function () {
  await this.page.getByRole("button", { name: "Add to cart" }).click();
});

Then("User should see the cart page", async function () {
  // ✅ THIS IS THE KEY FIX
  await this.page.locator('[data-test="shopping-cart-link"]').click();

  // ✅ Assert cart page
  await expect(this.page).toHaveURL(/cart.html/);
});
