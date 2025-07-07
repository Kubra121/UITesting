// tests/08-complete-purchase.spec.js
const { test, expect } = require("@playwright/test");

test("The order must be completed successfully", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");

  await page.click('.card-title:has-text("Samsung galaxy s6")');

  await page.click('a:has-text("Add to cart")');
  page.once("dialog", (dialog) => dialog.accept());

  await page.click("#cartur");

  await Promise.all([
    page.click('button:has-text("Place Order")'),
    await page.waitForSelector("#orderModal", { state: "visible" }),
    page.waitForSelector("#name", { state: "visible" }),
  ]);

  await page.fill("#name", "Kübra Özalp");
  await page.fill("#country", "Turkey");
  await page.fill("#city", "İzmir");
  await page.fill("#card", "1234 5678 9012 3456");
  await page.fill("#month", "05");
  await page.fill("#year", "2025");
  await page.click('button:has-text("Purchase")');

  const confirmation = page.locator(".sweet-alert");
  await expect(confirmation).toBeVisible();
  await expect(confirmation).toContainText("Thank you for your purchase!");
});
