import { months, stayData } from "../../../fixtures/commonData";
import { headerData } from "../../../fixtures/headerData";
import { listingData } from "../../../fixtures/listingData";
import commonPage from "../../../pages/CommonPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import pricingDashboardPage from "../../../pages/PricingDashboardPage";
import reviewPricesPage from "../../../pages/ReviewPricesPage";

describe(["functionalTest"], "Configure Listing", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should verify that the changes made to listing are retained", () => {
    const data = {
      minValue: 90,
      maxValue: 350,
    };
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertPageHeader(headerData.pricingDashboard);

    pricingDashboardPage.searchValue(listingData.sunsetWatcherEastAndWestId);

    commonPage.assertValueIsDisplayed(listingData.sunsetWatcherEastAndWest);

    reviewPricesPage.clickReviewPrices();

    headerPage.assertH3Header(headerData.configurePrices);

    reviewPricesPage.enterMinValue(data.minValue);
    reviewPricesPage.enterMaxValue(data.maxValue);

    reviewPricesPage.clickSaveAndRefresh();

    headerPage.assertPageHeader(headerData.dateSpecificOverride);

    reviewPricesPage.selectMonth(months.february);
    reviewPricesPage.clickOverride();
    reviewPricesPage.enterMinimumStay(stayData.one);
    reviewPricesPage.clickUpdate();

    headerPage.assertH3Header(headerData.configurePrices);

    reviewPricesPage.clickCloseModal();

    headerPage.assertPageHeader(headerData.pricingDashboard);

    loginPage.logout();
  });
});
