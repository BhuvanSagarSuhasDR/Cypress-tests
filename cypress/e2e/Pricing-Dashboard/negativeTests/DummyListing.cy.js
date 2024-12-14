import { missingFieldsMessages } from "../../../fixtures/CommonData";
import { headerData } from "../../../fixtures/HeaderData";
import commonPage from "../../../pages/CommonPage";
import dummyListingPage from "../../../pages/DummyListingPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";

describe(["negativeTest"], "Dummy listing", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should display all required field validation messages", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    dummyListingPage.clickCreateDummyListing();

    headerPage.assertH2Header(headerData.createDummyListing);

    dummyListingPage.clickContinue();

    commonPage.assertMessageVisible(missingFieldsMessages);

    dummyListingPage.clickCancel();

    loginPage.logout();
  });
});
