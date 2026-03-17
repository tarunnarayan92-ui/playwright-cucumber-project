import { Page, expect } from "@playwright/test";

export class IframePage {

  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://the-internet.herokuapp.com/iframe");
  }

  async enterText(text: string) {
    const frame = this.page.frameLocator("#mce_0_ifr");
    const editor = frame.locator("#tinymce");
    
    // Use JS to set the content as TinyMCE sometimes initializes as read-only or false contenteditable
    await editor.evaluate((el, textContent) => {
      el.innerHTML = `<p>${textContent}</p>`;
    }, text);
  }

  async validateText(text: string) {

    const frame = this.page.frameLocator("#mce_0_ifr");

    await expect(frame.locator("#tinymce")).toContainText(text);

  }

}