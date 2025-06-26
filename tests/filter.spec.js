const { test, expect } = require('@playwright/test');
const fs = require("fs");
const { login } = require("../utils/login");

test("Sort merchandise by price low to high", async ({ page }) => {
    await login(page);
    await page.locator("select[data-test='product-sort-container']").selectOption("lohi");
    await page.pause();
});