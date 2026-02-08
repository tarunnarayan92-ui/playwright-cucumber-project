import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("User scrolls to footer", async function () {
  const footer = this.page.locator('[data-test="footer"]');
  await footer.scrollIntoViewIfNeeded();
});

When("User clicks Facebook icon", async function () {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent("page"),
    this.page.locator('[data-test="social-facebook"]').click(),
  ]);

  this.newPage = newPage;
});

Then("Facebook page should open in new tab", async function () {
  await this.newPage.waitForLoadState();
  await expect(this.newPage).toHaveURL(/facebook/);
});