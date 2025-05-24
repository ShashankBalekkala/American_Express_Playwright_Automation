import { test as base, type Page } from '@playwright/test';
import { HomePage } from '../page-objects/american-express-homepage';
import { AllCardsPage } from '../page-objects/all-cards-page';
import { DescriptionPage } from '../page-objects/description-page';
import { UserDetailsPage } from '../page-objects/user-details-page';

type MyFixtures = {
  homePage: HomePage;
  allCardsPage: AllCardsPage;
  descriptionPage: DescriptionPage;
  userDetailsPage: UserDetailsPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  allCardsPage: async ({ page }, use) => {
    const allCardsPage = new AllCardsPage(page);
    await use(allCardsPage);
  },
  descriptionPage: async ({ page }, use) => {
    const descriptionPage = new DescriptionPage(page);
    await use(descriptionPage);
  },
  userDetailsPage: async ({ page }, use) => {
    const descriptionPage = new UserDetailsPage(page);
    await use(descriptionPage);
  },
});

export const expect = test.expect;
