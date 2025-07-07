// tests/06-cart-page.spec.js
const { test, expect } = require("@playwright/test");

test("Cart page should show products and total price", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");

  await page.click('a:has-text("Samsung galaxy s6")');
  await page.click("a.btn-success:text('Add to cart')");

  page.once("dialog", (dialog) => dialog.accept());

  await page.click("#cartur");

  const productName = await page
    .locator(".success td:nth-child(2)")
    .textContent();
  const total = await page.locator("#totalp").textContent();

  expect(productName).toContain("Samsung");
  expect(Number(total)).toBeGreaterThan(0);
});
