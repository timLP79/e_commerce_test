const { test, expect } = require('@playwright/test');
const fs = require("fs");
const { login } = require("../utils/login");

test("Navigate to ecommerce site and login", async ({ page }) => {
    await login(page);
    //verify login worked
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    //await page.pause();
});