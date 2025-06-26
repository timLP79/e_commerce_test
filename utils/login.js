async function login(page) {
    //goto site
    await page.goto("https://www.saucedemo.com/");
    //fill in form
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", {name: "Password"}).fill("secret_sauce");
    //submit form
    await page.getByRole('button', { name: "Login"}).click();
}
module.exports = { login };