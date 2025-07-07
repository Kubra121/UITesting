Playwright Test Environment Setup and Running Tests Step-by-Step Demo
1. Create Project Folder
Open the terminal or command prompt.
Create a new folder and open it:

mkdir playwright-demo

cd playwright-demo
Open this folder in your preferred editor.
2. Install Playwright
Run the following command to install Playwright and set up necessary files:

npm init playwright@latest
Accept the default options or customize as needed.
This creates these files:

package.json — project management file

playwright.config.js — Playwright configuration

tests/ folder — where your test files will go
3. Run the Tests
To run all tests, use this command in the terminal:

npx playwright test
To run a specific test file:

npx playwright test tests/example.spec.js
4. Run Tests with Browser UI (Headed Mode)
If you want to see the browser while tests run:

npx playwright test tests/example.spec.js --headed
5. View Test Reports
After tests finish, view an HTML report with:

npx playwright show-report
This will open a detailed test report in your browser.
