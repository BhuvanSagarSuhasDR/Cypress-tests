import { processPayload } from "../../fixtures/ApiPricingDashboard";
import { headerData } from "../../fixtures/HeaderData";
import { listingData } from "../../fixtures/ListingData";
import commonPage from "../../pages/CommonPage";
import headerPage from "../../pages/HeaderPage";
import loginPage from "../../pages/LoginPage";
import pricingDashboardPage from "../../pages/PricingDashboardPage";
import reviewPricesPage from "../../pages/ReviewPricesPage";
import ApiRequests from "../../utils/apiRequests.utils";

const apiRequests = new ApiRequests();

describe(["API"], "Integration Tests", () => {
  it("should send a valid request and verify the data in UI", () => {
    const updateData = { minPrice: 90, maxPrice: 300 };

    cy.loginToPricelabs(Cypress.env("userName"), Cypress.env("password"));

    apiRequests.processPricing(processPayload(updateData));

    cy.visitPricingPage();

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    pricingDashboardPage.searchValue(listingData.sunsetWatcherEastAndWestId);

    commonPage.assertValueIsDisplayed(listingData.sunsetWatcherEastAndWest);

    reviewPricesPage.clickReviewPrices();

    headerPage.assertH3Header(headerData.configurePrices);
    reviewPricesPage.assertMinPrice(updateData.minPrice);
    reviewPricesPage.assertMaxPrice(updateData.maxPrice);

    loginPage.logout();
  });
});
