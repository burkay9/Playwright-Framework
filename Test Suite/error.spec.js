import { test, expect } from '@playwright/test'
import { LoginPage } from '../Fixtures/loginPage.spec';
import { ProductsPage } from '../Fixtures/productsPage.spec';

test('Scenario: Sign in test - User tries logging in with blocked account', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);

    // Login steps
    await loginPage.goto();
    await loginPage.textFields.username.fill('locked_out_user');
    await loginPage.textFields.password.fill('secret_sauce');
    await loginPage.loginButton.click();
    // Const checks the locator of the error message and console logs it to ensure the assertion reads the error message
    const errormessage = await page.locator('[data-test=error]').innerText();
    expect(errormessage).toContain("Epic sadface: Sorry, this user has been locked out.")
    console.log(errormessage)
    await page.pause();
})