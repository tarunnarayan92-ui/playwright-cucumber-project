import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

let inventory: InventoryPage;

Given("User is logged in", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");
  await this.page.waitForURL(/inventory/);

  inventory = new InventoryPage(this.page);
});

When(
  "User adds {int} products to cart",
  async function (count: number) {
    await inventory.addProducts(count);
  }
);

When("User removes the product", async function () {
  await inventory.removeFirstProduct();
});

Then(
  "Cart badge should show {int}",
  async function (count: number) {
    const badge = this.page.locator(".shopping_cart_badge");
    await expect(badge).toHaveText(count.toString());
  }
);

Then("Cart badge should not be visible", async function () {
  await expect(this.page.locator(".shopping_cart_badge")).toHaveCount(0);
});