import { groupName } from "../../../fixtures/CommonData";
import { headerData } from "../../../fixtures/HeaderData";
import { listingData } from "../../../fixtures/ListingData";
import {
  default as CommonPage,
  default as commonPage,
} from "../../../pages/CommonPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import pricingDashboardPage from "../../../pages/PricingDashboardPage";
import reviewPricesPage from "../../../pages/ReviewPricesPage";

describe(["e2e"], "Group", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should verify that group name is retained .", () => {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    pricingDashboardPage.searchValue(listingData.sunsetWatcherEastAndWestId);

    commonPage.assertValueIsDisplayed(listingData.sunsetWatcherEastAndWest);

    reviewPricesPage.clickReviewPrices();

    headerPage.assertH3Header(headerData.configurePrices);

    reviewPricesPage.clickGroupCustomization();
    reviewPricesPage.selectGroupName(groupName.abc);
    reviewPricesPage.clickBack();
    pricingDashboardPage.searchValue(listingData.sunsetWatcherEastAndWestId);

    commonPage.assertValueIsDisplayed(listingData.sunsetWatcherEastAndWest);

    CommonPage.assertMessageVisible(groupName.abc);

    loginPage.logout();
  });
});
