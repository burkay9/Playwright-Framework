import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly products: {
    backPack: Locator;
    bikeLight:Locator;
    boltShirt: Locator;
    fleeceJacket: Locator;
    onesie:Locator;
    testShirt:Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.products = {
        backPack: page.locator('.inventory_item >> nth=0'),
        bikeLight: page.locator('inventory_item >> nth=1'),
        boltShirt: page.locator('inventory_item >> nth=2'),
        fleeceJacket: page.locator('inventory_item >> nth=3'),
        onesie: page.locator('inventory_item >> nth=4'),
        testShirt: page.locator('inventory_item >> nth=5'),
    };
  }

  async swagLabsLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async assertAll() {

    await expect(this.page.locator('#item_4_title_link')).toContainText('Sauce Labs Backpack')
if( await this.page.$('#item_4_title_link')){
    await this.page.locator('id=add-to-cart-sauce-labs-backpack').click()
}
await expect(this.page.locator('#item_0_title_link')).toContainText('Sauce Labs Bike Light')
if( await this.page.$('#item_0_title_link')){
    await this.page.locator('id=add-to-cart-sauce-labs-bike-light').click()
}
await expect(this.page.locator('#item_1_title_link')).toContainText('Sauce Labs Bolt T-Shirt')
if( await this.page.$('#item_1_title_link')){
    await this.page.locator('id=add-to-cart-sauce-labs-bolt-t-shirt').click()
}
await expect(this.page.locator('#item_5_title_link')).toContainText('Sauce Labs Fleece Jacket')
if( await this.page.$('#item_5_title_link')){
    await this.page.locator('id=add-to-cart-sauce-labs-fleece-jacket').click()
}
await expect(this.page.locator('#item_2_title_link')).toContainText('Sauce Labs Onesie')
if( await this.page.$('#item_2_title_link')){
    await this.page.locator('id=add-to-cart-sauce-labs-onesie').click()
}
await expect(this.page.locator('#item_3_title_link')).toContainText('Test.allTheThings() T-Shirt (Red)')
if( await this.page.$('#item_3_title_link')){
    await this.page.locator('id=add-to-cart-test.allthethings()-t-shirt-(red)').click()
}
  }
  
}
