# API Automation Framework Architecture Guide

This document provides a comprehensive, theoretical breakdown of the API automation framework architecture. You can use this as a study guide and a script when explaining your design choices to interviewers.

The primary goal of this architecture was to bring **scalability, maintainability, and clean code principles (DRY — Don't Repeat Yourself)** entirely into the API side, following the exact same standards applied to UI tests.

---

## 1. The Core Strategy: Using Playwright's Native `APIRequestContext`

**What we did:** Instead of bringing in a third-party library like `Axios` or `Supertest`, we used Playwright’s built-in `request` fixture.

**Why:**
* **Tool Consolidation:** By using the same library for UI and API, you reduce dependencies, minimize security vulnerabilities, and keep the tech stack streamlined.
* **Shared Context:** Playwright's `APIRequestContext` automatically leverages the same underlying browser network stack (meaning if you ever need to pass UI auth cookies directly over to an API test, it's seamless).
* **Speed:** It directly executes lightweight Node-based fetch operations without the overhead of spinning up browser windows.

## 2. Global Test Setup (`hooks/hooks.ts`)

**What we did:** We introduced an isolated API session (`request.newContext({baseURL: ...})`) in the global `Before` hook, binding it to the Cucumber `World` context (`this.apiContext`), and then explicitly closed it in the `After` hook (`this.apiContext.dispose()`).

**Why:**
* **Test Isolation:** Best practice dictates that tests should *never* share state. Bringing up a fresh API context before each scenario guarantees that headers or tokens from one test cannot pollute another.
* **Reducing Boilerplate:** By defining the `baseURL` once in the hook, we never have to type the domain explicitly in every request.
* **Memory Management:** Calling `.dispose()` cleanly shuts down the network channels after the scenario concludes, preventing memory leaks in CI/CD pipelines.

## 3. Test Data Management (`utils/apiPayloads.ts`)

**What we did:** We created a dedicated TypeScript object export to store the request bodies for POST, PUT, and PATCH endpoints rather than hardcoding them inside the step definitions.

**Why:**
* **Separation of Concerns (Data vs Logic):** Your step definitions should define *how* a test acts, not *what* data it holds. 
* **Easy Maintenance:** When an API schema changes (e.g., the developers add a newly required field to the payload), you only update this one `apiPayloads` file rather than hunting through hundreds of lines of code across different step definitions.

## 4. The "API Page Object Model" (`api/JsonPlaceholderApi.ts`)

**What we did:** We built an API Client class. We passed the global `apiContext` into its constructor and created dedicated methods for every endpoint (e.g., `createPost()`, `getPosts()`).

**Why:**
* **Architectural Consistency:** This is an impressive point for interviews. You applied the **Page Object Model (POM) design pattern**—which is normally reserved for UI pages—to APIs.
* **Reusability:** If 10 different test scenarios need to "Create a Post" as a setup step, they all call `api.createPost()`. If the endpoint route ever changes from `/posts` to `/v2/posts`, you only have to modify it in one single centralized place, avoiding mass refactoring.

## 5. The BDD Execution Layer (`features` & `step-definitions`)

**What we did:** We authored declarative (business-readable) Gherkin steps and mapped them to the execution logic using Playwright's native Node assertions (`expect(response.status()).toBe(200)`).

**Why:**
* **Declarative > Imperative:** Notice the steps say *"When I send a POST request to create a post"* rather than *"When I send a JSON body to /posts with title foo"*. This keeps the feature files readable for PMs and business stakeholders.
* **Strict Assertions:** We didn’t just assert the `200` or `201` Status Codes. The framework explicitly parses the JSON response (`await response.json()`) and verifies that the payload properties (like `title` and `body`) accurately match what we sent, proving the backend database actually caught and updated the data.

---

### Summary Pitch for the Interviewer
If they ask you to describe your framework, you can confidently say: 

> *"I built a BDD-driven API framework natively on top of Playwright. To ensure maximum maintainability, I abstracted my test data into separated utility layers, utilized Playwright’s hooks to generate completely isolated API Contexts per scenario, and utilized an 'API Client' pattern—which operates exactly like the Page Object Model—to centralize my HTTP routes and logic."*
