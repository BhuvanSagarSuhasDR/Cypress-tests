import { headerData } from "../../../fixtures/headerData";
import { listingData } from "../../../fixtures/listingData";
import commonPage from "../../../pages/CommonPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import pricingDashboardPage from "../../../pages/PricingDashboardPage";

describe(["functionalTest"], "Search Field Functionality", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should verify that the search field filters listings based on user input and displays the correct results.", () => {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    pricingDashboardPage.searchValue(listingData.listingId);

    commonPage.assertValueIsDisplayed(listingData.listingName);

    loginPage.logout();
  });
});
