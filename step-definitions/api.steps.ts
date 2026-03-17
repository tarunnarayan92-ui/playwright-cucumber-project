import { When, Then, Before } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { UsersApi } from "../api/UserApi";

let response: any;
let usersApi: UsersApi;

Before({ tags: "@api" }, async function () {
  usersApi = new UsersApi();
  await usersApi.init();
});

When("User calls GET users API", async function () {

  response = await usersApi.getUsers();

});

When("User creates a new user", async function () {

  response = await usersApi.createUser("Tarun", "SDET");

});

Then("Response status should be {int}", async function (status: number) {

  expect(response.status()).toBe(status);

});