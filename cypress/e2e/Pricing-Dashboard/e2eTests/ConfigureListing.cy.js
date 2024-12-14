import { months, priceData, stayData } from "../../../fixtures/CommonData";
import { headerData } from "../../../fixtures/HeaderData";
import { listingData } from "../../../fixtures/ListingData";
import commonPage from "../../../pages/CommonPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import pricingDashboardPage from "../../../pages/PricingDashboardPage";
import reviewPricesPage from "../../../pages/ReviewPricesPage";

describe(["e2e"], "Configure Listing", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should verify that the changes made to listing are retained", () => {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertH2Header(headerData.pricingDashboard);

    pricingDashboardPage.searchValue(listingData.sunsetWatcherEastAndWestId);

    commonPage.assertValueIsDisplayed(listingData.sunsetWatcherEastAndWest);

    reviewPricesPage.clickReviewPrices();

    headerPage.assertH3Header(headerData.configurePrices);

    reviewPricesPage.enterMinValue(priceData.minValue);
    reviewPricesPage.enterMaxValue(priceData.maxValue);
    reviewPricesPage.clickSaveAndRefresh();

    headerPage.assertH2Header(headerData.dateSpecificOverride);

    reviewPricesPage.selectMonth(months.january);
    reviewPricesPage.clickOverride();

    reviewPricesPage.enterMinimumStay(stayData.one);

    reviewPricesPage.clickUpdate();

    headerPage.assertH3Header(headerData.configurePrices);

    reviewPricesPage.selectMonth(months.january);
    reviewPricesPage.clickOverride();

    reviewPricesPage.assertMinStay(stayData.one);

    reviewPricesPage.clickUpdate();
    reviewPricesPage.clickCloseModal();

    headerPage.assertH2Header(headerData.pricingDashboard);

    loginPage.logout();
  });
});
