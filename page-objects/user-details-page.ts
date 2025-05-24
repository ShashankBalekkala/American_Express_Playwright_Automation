import { Locator, Page } from "@playwright/test";

export class UserDetailsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  get MRRadioBtn(): Locator {
    return this.page.locator('#MR + label');
  }
  get firstName(): Locator {
    return this.page.locator('#fieldControl-input-firstName');
  }
  get lastName(): Locator {
    return this.page.locator('#fieldControl-input-lastName');
  }
  get dateOfBirth(): Locator {
    return this.page.locator('#fieldControl-input-dateOfBirth');
  }
  get emailTextBox(): Locator {
    return this.page.locator('#fieldControl-input-email');
  }
  get mobileNumber(): Locator {
    return this.page.locator('#fieldControl-input-mobilePhoneNumber');
  }
  get sauvegarderEtContinuerBtn(): Locator {
    return this.page.getByRole('button', { name: 'Sauvegarder et Continuer' });
  }
  get journeyForm(): Locator {
    return this.page.locator('form[name="JourneyForm"]')
  }

}