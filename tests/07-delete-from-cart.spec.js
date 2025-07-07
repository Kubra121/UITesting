// tests/07-delete-from-cart.spec.js
const { test, expect } = require("@playwright/test");

test("The product should be deleted from the cart and the total should be updated", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com");

  await page.click('.card-title:has-text("Samsung galaxy s6")');
  await page.click('a:has-text("Add to cart")');

  page.once("dialog", (dialog) => dialog.accept());
  await page.click("#cartur");

  const productRow = page.locator('tr:has-text("Samsung galaxy s6")');
  await expect(productRow).toBeVisible();

  const oldTotalText = await page.locator("#totalp").textContent();
  const oldTotal = parseInt(oldTotalText || "0");

  await page.click('a:has-text("Delete")');

  await expect(productRow).toBeHidden();

  await page.waitForTimeout(1000);
  const newTotalText = await page.locator("#totalp").textContent();
  const newTotal = parseInt(newTotalText || "0");

  expect(newTotal).toBeLessThan(oldTotal);
});
