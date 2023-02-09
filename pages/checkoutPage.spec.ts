import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly totalCheck: {
    backPack: Locator;
    bikeLight:Locator;
    boltShirt: Locator;
    fleeceJacket: Locator;
    onesie:Locator;
    testShirt:Locator;

  }

  constructor(page: Page) {
    this.page = page;
    this.totalCheck = {
        backPack: page.locator('.inventory_item_price >> nth=0'),
        bikeLight: page.locator('.inventory_item_price >> nth=1'),
        boltShirt: page.locator('.inventory_item_price >> nth=2'),
        fleeceJacket: page.locator('.inventory_item_price >> nth=3'),
        onesie: page.locator('.inventory_item_price >> nth=4'),
        testShirt: page.locator('.inventory_item_price >> nth=5'),
    };
  }
  };