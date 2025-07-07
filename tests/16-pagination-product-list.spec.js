// tests/16-pagination-product-list.spec.js

const { test, expect } = require("@playwright/test");

test("Navigate with Next and Previous pagination buttons", async ({ page }) => {
  await page.goto("https://www.demoblaze.com");

  await expect(page).toHaveTitle(/STORE/);

  await page.waitForTimeout(2000);

  const prevBtn = page.locator("#prev2");
  await expect(prevBtn).toBeEnabled();
  await prevBtn.click();
  await page.waitForTimeout(2000);

  await page.waitForSelector(".card-title");
  const firstPageProducts = await page.locator(".card-title").allTextContents();
  console.log("First page", firstPageProducts);
  await page.waitForTimeout(2000);

  const nextBtn = page.locator("#next2");
  await expect(nextBtn).toBeEnabled();
  await nextBtn.click();
  await page.waitForTimeout(2000);

  const secondPageProducts = await page
    .locator(".card-title")
    .allTextContents();
  console.log("Second page", secondPageProducts);

  expect(secondPageProducts).not.toEqual(firstPageProducts);
  await page.waitForTimeout(2000);

  await expect(prevBtn).toBeEnabled();
  await prevBtn.click();
  await page.waitForTimeout(2000);

  const backToFirstPage = await page.locator(".card-title").allTextContents();
  console.log("backToFirstPage", backToFirstPage);
  await page.waitForTimeout(2000);

  expect(backToFirstPage).toEqual(firstPageProducts);
});
