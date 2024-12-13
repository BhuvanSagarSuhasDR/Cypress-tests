import { headerData } from "../../../fixtures/headerData";
import { pricingDashboardData } from "../../../fixtures/pricingDashboardData";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import pricingDashboardCountPage from "../../../pages/pricingDashboardCountPage";

describe(["functionalTest"], "Pricing Dashboard", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should show the proper listing count per page", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertPageHeader(headerData.pricingDashboard);

    pricingDashboardCountPage.clickGroup();

    pricingDashboardData.forEach((data) => {
      pricingDashboardCountPage.selectPricingDashboardCounts(data.count);
      pricingDashboardCountPage.assertListingCounts(data.expectedCount);
    });

    loginPage.logout();
  });
});
