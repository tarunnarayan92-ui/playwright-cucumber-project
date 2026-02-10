import { Page, expect } from "@playwright/test";

export class TablePracticePage {

  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
  }

  table = this.page.locator("table[name='BookTable']");

  async scrollToTable() {
    await this.table.scrollIntoViewIfNeeded();
  }

  async getRowCount() {
    return await this.table.locator("tbody tr").count();
  }

  async getColumnCount() {
    return await this.table.locator("tbody tr:first-child th").count();
  }

  async validateBookExists(bookName: string) {
    await expect(this.table).toContainText(bookName);
  }

  async fetchAllTableData() {

    const rows = await this.table.locator("tbody tr").all();

    for (let i = 1; i < rows.length; i++) {   // skip header

      const cols = await rows[i].locator("td").all();

      const book = await cols[0].innerText();
      const author = await cols[1].innerText();
      const subject = await cols[2].innerText();
      const price = await cols[3].innerText();

      console.log(`Book: ${book} | Author: ${author} | Subject: ${subject} | Price: ${price}`);
    }
  }
}