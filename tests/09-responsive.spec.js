// tests/09-responsive.spec.js
const { test, expect, devices } = require("@playwright/test");

test.use({ viewport: devices["iPhone 11"].viewport });

test("The site should open properly in mobile view", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("https://www.demoblaze.com");

  await expect(page.locator("#nava")).toBeVisible();

  await page.waitForSelector(".card", { timeout: 5000 });

  const cardCount = await page.locator(".card").count();
  expect(cardCount).toBeGreaterThan(0);
});
