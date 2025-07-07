// tests/05-add-to-cart.spec.js
const { test, expect } = require("@playwright/test");

test("The product must be added to the cart", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");
  await page.click('.card-title:has-text("Samsung galaxy s6")');
  await page.click('a:has-text("Add to cart")');

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added");
    await dialog.accept();
  });
});
