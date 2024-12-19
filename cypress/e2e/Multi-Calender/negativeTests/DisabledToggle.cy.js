import { listingData } from "../../../fixtures/ListingData";
import { validationTexts } from "../../../fixtures/ValidationTexts";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";
import multiCalenderPage from "../../../pages/MultiCalenderPage";
import syncPricePage from "../../../pages/SyncPricePage";

describe(["negativeTest"], "Disabled toggle", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should display correct validation message when toggle is off", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();
    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    multiCalenderPage.searchListing(listingData.listingId);

    multiCalenderPage.assertListingIsDisplayed(listingData.listingName);

    syncPricePage.assertToggleIsDisabled();

    syncPricePage.clickSyncPrice();

    syncPricePage.assertValidationMessage(
      validationTexts.toggleValidationTexts
    );

    loginPage.logoutFromMultiCalender();
  });
});
