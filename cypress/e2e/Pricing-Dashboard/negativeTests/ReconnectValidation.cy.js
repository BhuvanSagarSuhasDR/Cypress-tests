import { headerData } from "../../../fixtures/headerData";
import addOrRecconectListing from "../../../pages/AddOrRecconectListing";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/loginPage";

describe(["negativeTest"], "Add/Reconnect Listing", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should display required field validation message", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertPageHeader(headerData.pricingDashboard);

    addOrRecconectListing.clickAddOrReconnectListing();
    addOrRecconectListing.searchPMS("Booking Automation");
    addOrRecconectListing.selectPMS("Booking Automation");

    headerPage.assertPageHeader(headerData.addOrReconnectListing);

    addOrRecconectListing.clickConnect();

    addOrRecconectListing.assertMessageVisible();

    addOrRecconectListing.clickCancel();

    loginPage.logout();
  });
});
