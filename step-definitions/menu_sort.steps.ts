import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";

let inventory: InventoryPage;

When("User selects {string} sorting option", async function (option: string) {
  inventory = new InventoryPage(this.page);
  await inventory.selectSort(option);
});

Then("Products should be sorted accordingly", async function () {
  await expect(this.page.locator(".inventory_item")).toHaveCount(6);
});

When("User opens the menu and clicks logout", async function () {
  inventory = new InventoryPage(this.page);
  await inventory.openMenu();
  await inventory.clickLogout();
});

Then("User should be redirected to login page", async function () {
  await expect(this.page).toHaveURL(/saucedemo/);
});

When("User clicks Continue Shopping", async function () {
  await this.page.locator('[data-test="continue-shopping"]').click();
});

Then("User should return to inventory page", async function () {
  await expect(this.page).toHaveURL(/inventory/);
});
