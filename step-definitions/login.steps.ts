import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

Given("User navigates to SauceDemo login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await this.page.waitForLoadState("networkidle");
});

When(
  "User logs in with username {string} and password {string}",
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  },
);

When("User clicks login without entering credentials", async function () {
  // Direct click without filling username/password
  await this.page.getByRole("button", { name: "Login" }).click();
});

Then("User should land on inventory page", async function () {
  await this.page.waitForURL(/inventory/);
  await expect(this.page).toHaveURL(/inventory/);
});

Then(
  "Error message should be displayed {string}",
  async function (errorMessage: string) {
    const error = this.page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toHaveText(errorMessage);
  },
);
