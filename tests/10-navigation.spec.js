// tests/10-navigation.spec.js
const { test, expect } = require("@playwright/test");

test("Navigation between pages should work properly", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");
  await page.click("#cartur");

  await expect(page).toHaveURL("https://www.demoblaze.com/cart.html");

  await page.goBack();

  await expect(page).toHaveURL("https://www.demoblaze.com/");
});
