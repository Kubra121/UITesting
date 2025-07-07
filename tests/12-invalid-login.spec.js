// tests/12-invalid-login.spec.js
const { test, expect } = require("@playwright/test");

test("Login with invalid credentials on Demoblaze", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");

  await page.click("#login2");
  await page.waitForSelector("#logInModal", { state: "visible" });

  await page.fill("#loginusername", "invalidUser");
  await page.fill("#loginpassword", "wrongPassword");

  await page.click('button:has-text("Log in")');

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Wrong");
    await dialog.dismiss();
  });
});
