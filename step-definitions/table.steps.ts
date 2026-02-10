import { Given, When, Then } from "@cucumber/cucumber";
import { TablePracticePage } from "../pages/TablePracticePage";
import { expect } from "@playwright/test";

let tablePage: TablePracticePage;
let rows: number;
let cols: number;

Given("User navigates to table practice page", async function () {
  tablePage = new TablePracticePage(this.page);
  await tablePage.navigate();
});

When("User scrolls to book table", async function () {
  await tablePage.scrollToTable();
});

When("User checks row and column count", async function () {
  rows = await tablePage.getRowCount();
  cols = await tablePage.getColumnCount();
});

When("User prints full table data", async function () {
  await tablePage.fetchAllTableData();
});

Then("Table should contain book {string}", async function (book: string) {
  await tablePage.validateBookExists(book);
  expect(rows).toBeGreaterThan(0);
  expect(cols).toBeGreaterThan(0);
});