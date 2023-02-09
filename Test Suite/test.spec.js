import { test, expect } from '@playwright/test'
import { LoginPage } from '../Fixtures/loginPage.spec';
import { ProductsPage } from '../Fixtures/productsPage.spec';

test('Selectors Demo', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);

    // Login steps
    await loginPage.goto();

    // Math.random() *
    let myUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user']
    let username = myUsernames[Math.floor(Math.random()* myUsernames.length)];
    console.log(username)
    await loginPage.textFields.username.fill(username);
    await loginPage.textFields.password.fill('secret_sauce');
    await loginPage.loginButton.click();












    // Asserts layout and correctness of all product cards, then adds one of each product to the basket

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

    //check attribute value

    await expect(page.locator('text=Item total: $')).toBeVisible();

    // checking item price

    // backpack
    const backPack = await page.locator('.inventory_item_price >> nth=0').textContent();
    const backPackPriceString = backPack.replace('$', '')
    const backPackPriceInt = parseFloat(backPackPriceString)
    console.log(backPackPriceInt)

    //bike light
    const bikeLight = await page.locator('.inventory_item_price >> nth=1').textContent();
    const bikeLightPriceString = bikeLight.replace('$', '')
    const bikeLightPriceInt = parseFloat(bikeLightPriceString)
    console.log(bikeLightPriceInt)

    // Bolt T-shirt
    const boltShirt = await page.locator('.inventory_item_price >> nth=2').textContent();
    const boltShirtPriceString = boltShirt.replace('$', '')
    const boltShirtPriceInt = parseFloat(boltShirtPriceString)
    console.log(boltShirtPriceInt)

    // Onesie
    const onesie = await page.locator('.inventory_item_price >> nth=3').textContent();
    const onesiePriceString = onesie.replace('$', '')
    const onesiePriceInt = parseFloat(onesiePriceString)
    console.log(onesiePriceInt)

    // Fleece Jacket
    const fleeceJacket = await page.locator('.inventory_item_price >> nth=4').textContent();
    const fleeceJacketPriceString = fleeceJacket.replace('$', '')
    const fleeceJacketPriceInt = parseFloat(fleeceJacketPriceString)
    console.log(fleeceJacketPriceInt)

    // Test Shirt
    const testShirt = await page.locator('.inventory_item_price >> nth=5').textContent();
    const testShirtPriceString = testShirt.replace('$', '')
    const testShirtPriceInt = parseFloat(testShirtPriceString)
    console.log(testShirtPriceInt)

    // Tax
    const tax = await page.locator('.summary_tax_label').textContent();
    const taxPriceString = tax.replace('Tax: $', '')
    const taxPriceInt = parseFloat(taxPriceString)
    console.log(taxPriceInt)

    // Total Price
    const totalPrice = await page.locator('.summary_total_label').textContent();
    const totalPriceString = totalPrice.replace('Total: $', '')
    const totalPriceInt = parseFloat(totalPriceString)
    console.log(totalPriceInt)

    const totalOfAllProducts = backPackPriceInt + bikeLightPriceInt + boltShirtPriceInt + onesiePriceInt + fleeceJacketPriceInt + testShirtPriceInt + taxPriceInt




    await expect(totalOfAllProducts).toEqual(totalPriceInt)




    await page.click('id=finish')

    // check URL and Title 
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await expect(page).toHaveTitle(/.*Swag Labs/)


})