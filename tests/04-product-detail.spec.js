// tests/04-product-detail.spec.js
const { test, expect } = require("@playwright/test");

test("The product detail page should open correctly", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");
  await page.click('.card-title:has-text("Samsung galaxy s6")');
  await page.waitForSelector(".name");

  await expect(page.locator(".name")).toHaveText("Samsung galaxy s6");
  await expect(page.locator(".price-container")).toContainText("$");
  await expect(page.locator("#more-information")).not.toBeEmpty();
  await expect(page.getByText("Add to cart")).toBeVisible();
});
