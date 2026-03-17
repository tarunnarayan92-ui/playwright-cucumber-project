# Playwright + Cucumber Automation Framework

A scalable end-to-end UI automation framework built using **Playwright + Cucumber + TypeScript**, designed with **Page Object Model (POM)** architecture and industry best practices.

---

## 🚀 Key Highlights

✔ BDD-driven testing using Gherkin
✔ Playwright-powered fast & reliable automation
✔ Page Object Model (POM) design
✔ Parallel cross-browser execution
✔ Demo mode with visible alerts & actions
✔ Video recording & trace debugging
✔ Screenshot capture on failures
✔ Tag-based execution for flexible runs
✔ CI/CD ready architecture

---

## 🧰 Tech Stack

* **Playwright**
* **Cucumber (BDD)**
* **TypeScript**
* **Node.js**
* **POM Design Pattern**

---

## 📌 Framework Features

### ✅ Execution & Control

* Tag based execution (`@smoke`, `@regression`, etc.)
* Cross-browser support (Chromium, Firefox, WebKit)
* Parallel execution support
* Environment-based demo mode

### ✅ Debugging & Reporting

* Video recording of test runs
* Trace viewer for step replay
* Screenshot capture on failure
* Structured reporting artifacts

### ✅ UI Automation Coverage

* Alert handling (OK / Cancel / Prompt)
* Table data extraction & validation
* Checkout end-to-end workflow
* Scroll & dynamic element handling

---

## 📁 Project Structure

```
features/              → Gherkin scenarios
pages/                 → Page Object classes
step-definitions/      → Step implementation
hooks/                 → Test lifecycle setup
reports/               → videos, traces, screenshots
```

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Test Execution

### Run all tests

```bash
npm run test
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run alerts tests

```bash
npm run test:alerts
```

### Run cross-browser tests

```bash
npm run test:all
```

---

## 🎬 Demo Mode (Visible Execution)

Demo mode slows execution and makes alerts & actions visible.

### Run demo for all tests

```bash
npm run demo
```

### Run demo for alerts only

```bash
npm run demo:alerts
```

---

## 🎥 Debugging Failures

### Open trace viewer

```bash
npx playwright show-trace reports/trace-<timestamp>.zip
```

### View recorded videos

```
reports/videos/
```

---

## 💡 Design Principles

* Reusability & maintainability
* Clear separation of concerns
* Scalable test architecture
* Industry-standard automation practices

---

## 👨‍💻 Author

**Tarun**
Automation Test Engineer | Playwright | SDET
