import { Given, When, Then } from "@cucumber/cucumber";
import { TableValidationPage } from "../pages/TableValidationPage";
import { expect } from "@playwright/test";

let tablePage: TableValidationPage;
let total: string;

Given("User navigates to the tables page", async function () {
  tablePage = new TableValidationPage(this.page);

  await tablePage.navigate();
});

When("User clicks Last Name header to sort ascending", async function () {
  await tablePage.clickLastNameHeader();
});

Then("Last Name column should be sorted in ascending order", async function () {
  await tablePage.validateAscendingOrder();
});

When("User clicks Last Name header again", async function () {
  await tablePage.clickLastNameHeader();
});

Then(
  "Last Name column should be sorted in descending order",
  async function () {
    await tablePage.validateDescendingOrder();
  },
);

Then("All email values should match email format", async function () {
  await tablePage.validateEmailFormat();
});

When("User calculates total dues", async function () {
  total = await tablePage.calculateTotalDues();
});

Then("Total dues should be {string}", async function (expected) {
  expect(`$${total}`).toBe(expected);
});

When(
  "User clicks edit for First Name {string}",
  async function (firstName: string) {
    await tablePage.clickEditForJason(firstName);
  },
);
Then("URL should contain {string}", async function (value: string) {
  await tablePage.validateEditUrl(value);
});