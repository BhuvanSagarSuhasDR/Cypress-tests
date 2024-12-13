import { listingData } from "../../../fixtures/listingData";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";
import multiCalenderPage from "../../../pages/MultiCalenderPage";
import syncPricePage from "../../../pages/SyncPricePage";

describe(["negativeTest"], "Adding Duplicate Tags", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should prevent adding duplicate tags to a listing", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();
    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    multiCalenderPage.searchListing(listingData.listingId);

    multiCalenderPage.assertListingIsDisplayed(listingData.listingName);

    syncPricePage.assertToggleIsDisabled();

    syncPricePage.clickSyncPrice();

    syncPricePage.assertValidationMessage();

    loginPage.logoutFromMultiCalender();
  });
});
