import { Page } from "@playwright/test";

export class AlertsPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://testautomationpractice.blogspot.com/");
  }

  // pause helper for visibility
  private async visiblePause() {
    if (process.env.DEMO_MODE === "true") {
      await this.page.waitForTimeout(2000); // 👈 alert visible time
    }
  }

  // SIMPLE ALERT
  async clickSimpleAlertAndAccept() {
    this.page.once("dialog", async (dialog) => {
      console.log("Alert text:", dialog.message());
      await this.visiblePause();
      await dialog.accept();
    });

    await this.page.locator("#alertBtn").click();
  }

  // CONFIRM OK
  async clickConfirmationAlertAndAccept() {
    this.page.once("dialog", async (dialog) => {
      console.log("Confirm text:", dialog.message());
      await this.visiblePause();
      await dialog.accept();
    });

    await this.page.locator("#confirmBtn").click();
  }

  // CONFIRM CANCEL
  async clickConfirmationAlertAndDismiss() {
    this.page.once("dialog", async (dialog) => {
      console.log("Confirm text:", dialog.message());
      await this.visiblePause();
      await dialog.dismiss();
    });

    await this.page.locator("#confirmBtn").click();
  }

  // PROMPT ALERT
  async clickPromptAlertAndEnter(text: string) {
    this.page.once("dialog", async (dialog) => {
      console.log("Prompt text:", dialog.message());
      await this.visiblePause();
      await dialog.accept(text);
    });

    await this.page.locator("#promptBtn").click();
  }

  async getResultText() {
    return this.page.locator("#demo").textContent();
  }
}
