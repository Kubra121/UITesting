// tests/02-category-links.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Category Links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.demoblaze.com");
  });

  test("Phones category", async ({ page }) => {
    await page.click('a:has-text("Phones")');
    await page.waitForSelector('.card-title:has-text("Samsung")');
  });

  test("Laptops category", async ({ page }) => {
    await page.click('a:has-text("Laptops")');
    await page.waitForSelector('.card-title:has-text("Sony vaio")');
  });

  test("Monitors category", async ({ page }) => {
    await page.click('a:has-text("Monitors")');
    await page.waitForSelector('.card-title:has-text("Apple monitor")');
  });
});
