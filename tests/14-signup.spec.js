// tests/14-signup.spec.js
const { test, expect } = require("@playwright/test");

test("Sign up a new user on Demoblaze", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");

  await page.click("#signin2");
  await page.waitForSelector("#signInModal", { state: "visible" });

  const username = `user45`;
  const password = "Test1234";

  await page.fill("#sign-username", username);
  await page.fill("#sign-password", password);

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Sign up successful");
    await dialog.accept();
  });

  await page.click('button:has-text("Sign up")');
});
