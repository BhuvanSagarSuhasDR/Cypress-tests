import { missingFieldsMessages } from "../../../fixtures/commonData";
import { headerData } from "../../../fixtures/headerData";
import commonPage from "../../../pages/commonPage";
import dummyListingPage from "../../../pages/DummyListingPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/loginPage";

describe(["negativeTest"], "Dummy listing", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should display all required field validation messages", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertPageHeader(headerData.pricingDashboard);

    dummyListingPage.clickCreateDummyListing();

    headerPage.assertPageHeader(headerData.createDummyListing);

    dummyListingPage.clickContinue();

    commonPage.assertMessageVisible(missingFieldsMessages);

    dummyListingPage.clickCancel();

    loginPage.logout();
  });
});
