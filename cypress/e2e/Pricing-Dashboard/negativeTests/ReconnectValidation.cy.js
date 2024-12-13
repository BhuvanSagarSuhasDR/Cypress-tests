import { headerData } from "../../../fixtures/headerData";
import { validationTexts } from "../../../fixtures/ValidationTexts";
import addOrRecconectListing from "../../../pages/AddOrRecconectListing";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";

describe(["negativeTest"], "Add/Reconnect Listing", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should display required field validation message", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    addOrRecconectListing.clickAddOrReconnectListing();
    addOrRecconectListing.searchPMS("Booking Automation");
    addOrRecconectListing.selectPMS("Booking Automation");

    headerPage.assertH2Header(headerData.addOrReconnectListing);

    addOrRecconectListing.clickConnect();

    addOrRecconectListing.assertMessageVisible(validationTexts.apiKeyIsEmpty);

    addOrRecconectListing.clickCancel();

    loginPage.logout();
  });
});
