// tests/15-signup-existing.spec.js

const { test, expect } = require("@playwright/test");

test("Sign up with existing username should fail on Demoblaze", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com");

  await page.click("#signin2");
  await page.waitForSelector("#signInModal", { state: "visible" });

  await page.fill("#sign-username", "demo");
  await page.fill("#sign-password", "demo");

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("This user already exist.");
    await dialog.accept();
  });

  await page.click('button:has-text("Sign up")');
});
