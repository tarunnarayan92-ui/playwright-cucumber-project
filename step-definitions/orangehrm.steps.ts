import { Given, When, Then } from "@cucumber/cucumber";
import { OrangeHRMLoginPage } from "../pages/OrangeHRMLoginPage";
import { OrangeHRMDashboardPage } from "../pages/OrangeHRMDashboardPage";

let loginPage: OrangeHRMLoginPage;
let dashboardPage: OrangeHRMDashboardPage;

Given("User navigates to OrangeHRM login page", async function () {
  loginPage = new OrangeHRMLoginPage(this.page);
  dashboardPage = new OrangeHRMDashboardPage(this.page);
  await loginPage.navigate();
  await this.page.waitForLoadState("networkidle");
});

When("User clicks on {string}", async function (linkName: string) {
  if (linkName === "Forgot your password?") {
    await loginPage.clickForgotPassword();
  }
});

When("User clicks on OrangeHRM INC link", async function () {
  await loginPage.clickOrangeHrmInc();
});

When("User clicks on LinkedIn icon", async function () {
  await loginPage.clickSocialLink("LinkedIn");
});

When("User clicks on Facebook icon", async function () {
  await loginPage.clickSocialLink("Facebook");
});

When("User clicks on Twitter icon", async function () {
  await loginPage.clickSocialLink("Twitter");
});

When("User clicks on YouTube icon", async function () {
  await loginPage.clickSocialLink("YouTube");
});

When("User logs into OrangeHRM with username {string} and password {string}", async function (username, password) {
  await loginPage.login(username, password);
});

Then("User should be navigated to the dashboard", async function () {
  await dashboardPage.verifyDashboard();
});

When("User clicks on {string} from side menu", async function (menuItem: string) {
  await dashboardPage.clickSideMenuItem(menuItem);
  await this.page.waitForTimeout(500); // small delay to allow animations
});
