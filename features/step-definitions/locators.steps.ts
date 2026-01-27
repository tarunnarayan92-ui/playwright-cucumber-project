import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

When(
  "User uses stable Playwright locators on the products page",
  async function () {
    const page = this.page;

    // Ensure we are on inventory page
    await expect(page).toHaveURL(/inventory/);

    // ✅ getByRole (BEST practice)
    await page
      .getByRole("button", { name: /add to cart/i })
      .first()
      .click();

    // ✅ getByText (stable)
    await page.getByText("Sauce Labs Bike Light").click();

    // Navigate back safely
    await page.waitForURL(/inventory/);

    // ✅ locator() (CSS selector – very reliable)
    await page.locator(".product_sort_container").selectOption("lohi");

    // Return to inventory
    await page.goBack();
  },
);

Then(
  "User should successfully interact with elements using those locators",
  async function () {
    await expect(this.page).toHaveURL(/inventory/);
  },
);
