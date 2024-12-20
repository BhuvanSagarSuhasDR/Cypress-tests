import { headerData } from "../../../fixtures/HeaderData";
import { pricingDashboardData } from "../../../fixtures/PricingDashboardData";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import pricingDashboardCountPage from "../../../pages/PricingDashboardCountPage";

describe(["functionalTest"], "Pricing Dashboard", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should show the proper listing count per page", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    pricingDashboardCountPage.clickGroup();

    pricingDashboardData.forEach((data) => {
      pricingDashboardCountPage.selectPricingDashboardCounts(data.count);
      pricingDashboardCountPage.assertListingCounts(data.expectedCount);
    });

    loginPage.logout();
  });
});
