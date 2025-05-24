import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get acceptCookiesButton(): Locator {
    return this.page.getByTestId('granular-banner-button-accept-all');
  }
  get devenirClientButton(): Locator {
    return this.page.getByRole('button', { name: 'Devenir Client' });
  }
  get cartesAmericanExpressButton(): Locator {
    return this.page.getByRole('link', { name: 'Les Cartes AMERICAN EXPRESS' });
  }
  async clickOnAcceptCookiesButtonIfVisible() {
    try {
      await this.acceptCookiesButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.acceptCookiesButton.click();
    } catch {
      console.log("Good to go Ahead !!")
    }
  }
}