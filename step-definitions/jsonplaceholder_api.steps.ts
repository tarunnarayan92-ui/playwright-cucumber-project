import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { JsonPlaceholderApi } from "../api/JsonPlaceholderApi";
import { apiPayloads } from "../utils/apiPayloads";

let api: JsonPlaceholderApi;
let response: any;
let responseBody: any;

When("I send a GET request to fetch a post", async function () {
  api = new JsonPlaceholderApi(this.apiContext);
  response = await api.getPosts(1);
});

When("I send a POST request to create a post", async function () {
  api = new JsonPlaceholderApi(this.apiContext);
  response = await api.createPost();
});

When("I send a PUT request to update a post", async function () {
  api = new JsonPlaceholderApi(this.apiContext);
  response = await api.updatePost(1);
});

When("I send a PATCH request to partially update a post", async function () {
  api = new JsonPlaceholderApi(this.apiContext);
  response = await api.patchPost(1);
});

When("I send a DELETE request to remove a post", async function () {
  api = new JsonPlaceholderApi(this.apiContext);
  response = await api.deletePost(1);
});

Then("the API response status code should be {int}", async function (statusCode: number) {
  expect(response.status()).toBe(statusCode);
});

Then("the response body should contain the post details", async function () {
  responseBody = await response.json();
  expect(responseBody.id).toBe(1);
  expect(responseBody.userId).toBeDefined();
  expect(responseBody.title).toBeDefined();
});

Then("the response body should reflect the created post", async function () {
  responseBody = await response.json();
  expect(responseBody.title).toBe(apiPayloads.createPost.title);
  expect(responseBody.body).toBe(apiPayloads.createPost.body);
  expect(responseBody.userId).toBe(apiPayloads.createPost.userId);
  expect(responseBody.id).toBeDefined(); // Mock server usually returns a new ID (e.g. 101)
});

Then("the response body should reflect the updated post", async function () {
  responseBody = await response.json();
  expect(responseBody.id).toBe(apiPayloads.updatePost.id);
  expect(responseBody.title).toBe(apiPayloads.updatePost.title);
  expect(responseBody.body).toBe(apiPayloads.updatePost.body);
});

Then("the response body should reflect the partially updated title", async function () {
  responseBody = await response.json();
  expect(responseBody.title).toBe(apiPayloads.patchPost.title);
});
