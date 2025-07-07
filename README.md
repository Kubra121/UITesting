# Playwright Test Environment Setup and Running Tests

This guide provides a step-by-step demo for setting up a Playwright test environment and running tests.

---

## 1. Create Project Folder

Open the terminal or command prompt and run the following commands:

```bash
mkdir playwright-demo
cd playwright-demo
```

Then open this folder in your preferred code editor (e.g., VS Code).

---

## 2. Install Playwright

Install Playwright and set up the necessary configuration files by running:

```bash
npm init playwright@latest
```

Accept the default options or customize as needed.

This will create the following:

- `package.json` — Project configuration and dependencies  
- `playwright.config.js` — Playwright configuration file  
- `tests/` folder — Where your test files will be placed

---

## 3. Run the Tests

To run **all tests**, use:

```bash
npx playwright test
```

To run a **specific test file**, such as `example.spec.js`, use:

```bash
npx playwright test tests/example.spec.js
```

---

## 4. Run Tests with Browser UI (Headed Mode)

To run tests and see the browser as it executes each step:

```bash
npx playwright test tests/example.spec.js --headed
```

---

## 5. View Test Reports

After tests complete, you can generate and view a detailed HTML report:

```bash
npx playwright show-report
```

This will open the test report in your default web browser.

---

Happy testing with Playwright! 🎭
