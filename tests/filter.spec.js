const { test, expect } = require('@playwright/test');
const fs = require("fs");
const { login } = require("../utils/login");

test("Sort merchandise by price low to high", async ({ page }, testInfo) => {
    await login(page);
    await page.locator("select[data-test='product-sort-container']").selectOption("lohi");

    const items = await page.locator(".inventory_item");
    const output = [];

    for (let i = 0; i < await items.count(); i++) {
        const item = items.nth(i);
        const name = await item.locator(".inventory_item_name").textContent();
        const price = await item.locator(".inventory_item_price").textContent();

        const record = {
            name: name.trim(),
            price: price.trim(),
        };
        output.push(record);
    }

    const prices = output.map(item =>
        parseFloat(item.price.replace("$", "").trim())
    );

    const isSorted = prices.every((p, i, arr) => i === 0 || arr[i-1] <= p);
    const filename = `output/results-${testInfo.project.name}.json`;

    fs.mkdirSync("output", { recursive: true });
    fs.writeFileSync(filename, JSON.stringify(output, null, 2));

    console.log(`--- TEST SUMMARY (${testInfo.project.name}) ---`);
    console.log(`Items found: ${output.length}`);
    console.log(`Sorted low to high: ${isSorted ? '✅ YES' : '❌ NO'}`);
    console.log(`Results saved to ${filename}`);
    expect(isSorted).toBe(true);
});