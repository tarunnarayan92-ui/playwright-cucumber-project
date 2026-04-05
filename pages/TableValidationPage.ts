import { Page, expect } from "@playwright/test";

export class TableValidationPage {
  constructor(private page: Page) {}

  table = this.page.locator("#table1");

  lastNameHeader = this.table.locator("th").first();

  lastNameColumn = this.table.locator("tbody tr td:nth-child(1)");

  emailColumn = this.table.locator("tbody tr td:nth-child(3)");

  duesColumn = this.table.locator("tbody tr td:nth-child(4)");

  rows = this.table.locator("tbody tr");

  async navigate() {
    await this.page.goto("https://the-internet.herokuapp.com/tables");
  }

  async clickLastNameHeader() {
    await this.lastNameHeader.click();
  }

  async getLastNames() {
    return await this.lastNameColumn.allTextContents();
  }

  async validateAscendingOrder() {
    await expect(async () => {
      const names = await this.getLastNames();
      const sorted = [...names].sort();
      expect(names).toEqual(sorted);
    }).toPass();
  }

  async validateDescendingOrder() {
    await expect(async () => {
      const names = await this.getLastNames();
      const sorted = [...names].sort().reverse();
      expect(names).toEqual(sorted);
    }).toPass();
  }

  async validateEmailFormat() {
    const emails = await this.emailColumn.allTextContents();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (const email of emails) {
      expect(regex.test(email)).toBeTruthy();
    }
  }

  async calculateTotalDues() {
    const dues = await this.duesColumn.allTextContents();

    let total = 0;

    for (const d of dues) {
      total += parseFloat(d.replace("$", ""));
    }

    return total.toFixed(2);
  }

  async clickEditForJason(firstName: string) {
    const row = this.rows.filter({
      has: this.page.locator("td:nth-child(2)", { hasText: firstName }),
    });

    await row.locator("a", { hasText: "edit" }).click();
  }

  async validateEditUrl(value:string){
  await expect(this.page).toHaveURL(new RegExp(value))
}
}
