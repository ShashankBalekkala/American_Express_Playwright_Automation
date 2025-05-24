import { Locator, Page } from "@playwright/test";

export class DescriptionPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get demandezVotreCarteBtn(): Locator {
    return this.page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' });
  }

}