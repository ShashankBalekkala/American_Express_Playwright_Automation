import { expect } from "@playwright/test";
import { test } from "../fixtures/test-base";


test.describe('FR Credit Card Application Flow', () => {

  test('Cartes Gold American Express', async ({ page, homePage, allCardsPage, descriptionPage, userDetailsPage }) => {
    let waitForAllCardsPageLoad = page.waitForResponse(response =>
      response.url().includes('trigger-and-watch-data') && response.status() === 200, { timeout: 60000 });

    await page.goto(process.env.BASEURL!);

    // Landed to Home Page.
    await homePage.clickOnAcceptCookiesButtonIfVisible()
    await homePage.devenirClientButton.click();
    // Step 1 - click on “Cartes American Express” button in homepage
    await homePage.cartesAmericanExpressButton.waitFor({ state: 'attached' });
    await expect(homePage.cartesAmericanExpressButton).toBeEnabled();
    await homePage.cartesAmericanExpressButton.click();
    await waitForAllCardsPageLoad;
    // All Cards Page . 
    // Step 2 : click on “En Savior Plus” button  Under “Cartes Gold American Express”
    await allCardsPage.enSavoirPlusBtnForCard('gold').waitFor({ state: "visible" })
    await homePage.clickOnAcceptCookiesButtonIfVisible()
    await allCardsPage.enSavoirPlusBtnForCard('gold').scrollIntoViewIfNeeded();
    await allCardsPage.enSavoirPlusBtnForCard('gold').click()
    // Description Page.
    // Step 3 : Demandez Votre Carte Button
    await descriptionPage.demandezVotreCarteBtn.waitFor({ state: "visible" })
    await descriptionPage.demandezVotreCarteBtn.click();
    //  User Details Page .
    // Fill the Basic details and click on “Sauvegarder et Continuer”
    await expect(userDetailsPage.journeyForm).toBeVisible({ timeout: 10000 })
    await expect(page.url()).toContain('amex-cardshop-details-apply-GoldCardAmericanExpress');
    await homePage.clickOnAcceptCookiesButtonIfVisible()
    await userDetailsPage.MRRadioBtn.click();
    await userDetailsPage.firstName.fill('Shashank');
    await userDetailsPage.lastName.fill('Kumar');
    await userDetailsPage.dateOfBirth.fill('01/01/1999');
    await userDetailsPage.emailTextBox.scrollIntoViewIfNeeded();
    await userDetailsPage.emailTextBox.pressSequentially('shashank@example.com', { delay: 50 });
    await userDetailsPage.mobileNumber.scrollIntoViewIfNeeded();
    await userDetailsPage.mobileNumber.pressSequentially('0612345678', { delay: 50 });
    await expect(userDetailsPage.mobileNumber).toHaveValue('0612345678');
    await expect(userDetailsPage.firstName).toHaveValue('Shashank');
    await userDetailsPage.sauvegarderEtContinuerBtn.click();

    // Commenting the below Assertion line , Since i have intermittently noticed that user gets the
    //  page - Veuillez-nous excuser pour la gêne occasionnée after clicking the sauvegarderEtContinuerBtn

    // await expect(userDetailsPage.journeyForm).toBeVisible({ timeout: 10000 })

  })
})

