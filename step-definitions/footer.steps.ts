import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("User scrolls to footer", async function () {
  const footer = this.page.locator('.footer');
  await footer.scrollIntoViewIfNeeded();
});

Then("Footer section should be visible", async function () {
  const footer = this.page.locator('.footer');
  await expect(footer).toBeVisible();
});

Then("Footer should display copyright text", async function () {
  const copyrightText = this.page.locator('.footer').locator("text=/© \\d{4}/");
  await expect(copyrightText).toBeVisible();
});

When("User clicks Facebook icon", async function () {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent("page"),
    this.page.locator('.footer .social_facebook a').click(),
  ]);

  this.newPage = newPage;
});

Then("Facebook page should open in new tab", async function () {
  await this.newPage.waitForLoadState();
  await expect(this.newPage).toHaveURL(/facebook/);
});

When("User clicks Twitter icon", async function () {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent("page"),
    this.page.locator('.footer .social_twitter a').click(),
  ]);

  this.twitterPage = newPage;
});

Then("Twitter page should open in new tab", async function () {
  await this.twitterPage.waitForLoadState();
  await expect(this.twitterPage).toHaveURL(/twitter|x\.com/);
});

When("User clicks LinkedIn icon", async function () {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent("page"),
    this.page.locator('.footer .social_linkedin a').click(),
  ]);

  this.linkedinPage = newPage;
});

Then("LinkedIn page should open in new tab", async function () {
  await this.linkedinPage.waitForLoadState();
  await expect(this.linkedinPage).toHaveURL(/linkedin/);
});

Then("Privacy Policy text should be visible", async function () {
  const privacyText = this.page.locator('.footer').locator("text=/Privacy Policy/");
  await expect(privacyText).toBeVisible();
});

Then("All social media icons should be visible and clickable", async function () {
  const socialIcons = this.page.locator('.footer [class*="social_"]');
  const count = await socialIcons.count();
  
  expect(count).toBeGreaterThan(0);
  
  for (let i = 0; i < count; i++) {
    const icon = socialIcons.nth(i);
    await expect(icon).toBeVisible();
    await expect(icon).toBeEnabled();
  }
});