import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { AlertsPage } from "../pages/AlertsPage";

let alertsPage: AlertsPage;

Given("User navigates to alerts practice page", async function () {
  alertsPage = new AlertsPage(this.page);
  await alertsPage.navigate();
});

When("User clicks Simple Alert and accepts it", async function () {
  await alertsPage.clickSimpleAlertAndAccept();
});

When("User clicks Confirmation Alert and accepts it", async function () {
  await alertsPage.clickConfirmationAlertAndAccept();
});

When("User clicks Confirmation Alert and dismisses it", async function () {
  await alertsPage.clickConfirmationAlertAndDismiss();
});

When("User clicks Prompt Alert and enters {string}", async function (text) {
  await alertsPage.clickPromptAlertAndEnter(text);
});

Then("Confirmation result should display {string}", async function (expected) {
  const text = await alertsPage.getResultText();
  expect(text).toContain(expected);
});

Then("Prompt result should display {string}", async function (expected) {
  const text = await alertsPage.getResultText();
  expect(text).toContain(expected);
});
