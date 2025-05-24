import { Locator, Page } from "@playwright/test";

export class AllCardsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  enSavoirPlusBtnForCard(card :string): Locator {
    return this.page.locator(`a[href*="intlink=fr-proprietary-${card}"]`);
  }
}