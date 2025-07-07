// tests/03-product-list.spec.js
const { test, expect } = require("@playwright/test");

test("The category product list should be displayed completely", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com");
  await page.click('a:has-text("Phones")');
  await page.waitForSelector(".card");

  const productTitles = await page.locator(".card-title").allTextContents();
  expect(productTitles.length).toBeGreaterThan(0);

  for (const title of productTitles) {
    expect(title).not.toBe("");
  }

  const productPrices = await page.locator(".card-block h5").allTextContents();
  for (const price of productPrices) {
    console.log("Price: ", price);
    expect(price).toMatch(/\$\d+/);
  }
});
