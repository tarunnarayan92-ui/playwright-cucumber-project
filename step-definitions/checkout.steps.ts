import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let checkout: CheckoutPage;

Given("User has product in cart", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");
  await this.page.waitForURL(/inventory/);

  const inventory = new InventoryPage(this.page);
  await inventory.addProducts(1);

  await this.page.locator(".shopping_cart_link").click();
  await this.page.waitForURL(/cart/);

  checkout = new CheckoutPage(this.page);
});

When(
  "User completes checkout with valid details",
  async function () {
    await checkout.completeCheckout("John", "Doe", "500001");
  }
);

When(
  "User tries checkout without first name",
  async function () {
    await checkout.checkoutWithoutFirstName();
  }
);

Then("Order confirmation page should be displayed", async function () {
  await expect(this.page).toHaveURL(/checkout-complete/);
});

Then(
  "Checkout error should be displayed {string}",
  async function (message: string) {
    await expect(
      this.page.locator('[data-test="error"]')
    ).toHaveText(message);
  }
);