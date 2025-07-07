// tests/11-header-links.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Header links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.demoblaze.com");
  });

  test("Home link navigates to homepage", async ({ page }) => {
    await page.click('a:has-text("Home")');
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  });

  test("Contact modal opens", async ({ page }) => {
    await page.click('a:has-text("Contact")');
    await expect(page.locator("#exampleModal")).toBeVisible();
  });

  test("About us modal opens", async ({ page }) => {
    await page.click('a:has-text("About us")');
    await expect(page.locator("#videoModal")).toBeVisible();
  });

  test("Cart link navigates to cart page", async ({ page }) => {
    await page.click('a:has-text("Cart")');
    await expect(page).toHaveURL(/cart.html/);
  });

  test("Log in modal opens", async ({ page }) => {
    await page.click('a:has-text("Log in")');
    await expect(page.locator("#logInModal")).toBeVisible();
  });

  test("Sign up modal opens", async ({ page }) => {
    await page.click('a:has-text("Sign up")');
    await expect(page.locator("#signInModal")).toBeVisible();
  });
});
