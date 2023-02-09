import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly textFields: {
    username: Locator;
    password: Locator;
  }
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textFields = {
       username: page.locator('#user-name'),
       password: page.locator('#password')
    }
    this.loginButton = page.locator('[data-test="login-button"]')

}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }
}
