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
    const rows = this.table.locator("tbody tr");
    const rowCount = await rows.count();
    const tableData: string[] = [];

    for (let i = 1; i < rowCount; i++) {   // skip header
      const cols = rows.nth(i).locator("td");
      const colCount = await cols.count();
      if (colCount >= 4) {
        const book = await cols.nth(0).innerText();
        const author = await cols.nth(1).innerText();
        const subject = await cols.nth(2).innerText();
        const price = await cols.nth(3).innerText();
        
        tableData.push(`Book: ${book} | Author: ${author} | Subject: ${subject} | Price: ${price}`);
      }
    }
    console.info(tableData.join("\\n"));
  }
}