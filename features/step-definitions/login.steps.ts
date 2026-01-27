import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("User opens the browser", async function () {
  console.log("Browser opened");
});

Given("User navigates to SauceDemo login page", async function () {
  await this.page.goto("https://www.saucedemo.com/");
});

When("User enters valid username and password", async function () {
  await this.page.getByPlaceholder("Username").fill("standard_user");
  await this.page.getByPlaceholder("Password").fill("secret_sauce");
});

When("User clicks on login button", async function () {
  await this.page.getByRole("button", { name: "Login" }).click();
});

Then("User should see the products page", async function () {
  await expect(this.page).toHaveURL(/inventory/);
});