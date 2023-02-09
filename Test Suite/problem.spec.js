import { test, expect } from '@playwright/test'
import { LoginPage } from '../Fixtures/loginPage.spec';
import { ProductsPage } from '../Fixtures/productsPage.spec';

test('Performance Demo', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);

    // Login steps
    await loginPage.goto();

    await loginPage.textFields.username.fill('problem_user');
    await loginPage.textFields.password.fill('secret_sauce');
    await loginPage.loginButton.click();


    // Asserts 

    await productsPage.assertAll();
    page.pause();

    await page.locator('id=shopping_cart_container').click()
    await page.locator('id=checkout').click()

    await page.click('id=first-name')
    await page.locator('id=first-name').fill('Burkay')
    await page.click('id=last-name')
    await page.locator('id=last-name').fill('Canpolat')
    await page.click('id=postal-code')
    await page.locator('id=postal-code').fill('N9 9LZ')
    await page.locator('id=continue').click()
    await page.pause();
// Constant checks the locator of the error message and console logs it to ensure the assertion reads the error message
    const errormessage2 = await page.locator('[data-test=error]').innerText();
    expect(errormessage2).toContain("Error: Last Name is required")
    console.log(errormessage2)
    await page.pause();
})