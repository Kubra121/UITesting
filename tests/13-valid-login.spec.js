// tests/13-valid-login.spec.js
const { test, expect } = require("@playwright/test");

test("Login with valid credentials on Demoblaze", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");

  await page.click("#login2");
  await page.waitForSelector("#logInModal", { state: "visible" });

  await page.fill("#loginusername", "demo");
  await page.fill("#loginpassword", "demo");

  page.once("dialog", async (dialog) => {
    throw new Error("Unexpected alert: " + dialog.message());
  });

  await page.click('button:has-text("Log in")');

  await expect(page.locator("#nameofuser")).toContainText("Welcome");
});
