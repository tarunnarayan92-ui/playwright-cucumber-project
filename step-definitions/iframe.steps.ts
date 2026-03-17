import { Given, When, Then } from "@cucumber/cucumber";
import { IframePage } from "../pages/IframePage";

let iframePage: IframePage;

Given("User navigates to iframe page", async function () {
  iframePage = new IframePage(this.page);
  await iframePage.navigate();
});

When("User enters text {string}", async function (text: string) {
  await iframePage.enterText(text);
});

Then("Text should appear in iframe", async function () {
  await iframePage.validateText("Hello Playwright");
});