const { test, expect } = require('@playwright/test');
const fs = require("fs");

test("Navigate to ecommerce site and login", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    //fill in form
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", {name: "Password"}).fill("secret_sauce");

    //submit form
    await page.getByRole('button', { name: "Login"}).click();

    //verify login worked
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    //await page.pause();
});