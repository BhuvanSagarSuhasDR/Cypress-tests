import { headerData } from "../../../fixtures/headerData";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import metricsPage from "../../../pages/MetricsPage";

describe(["e2e"], "Metrics", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should show and hide specific metrics accurately", () => {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertPageHeader(headerData.pricingDashboard);

    metricsPage.clickAddMetrics();

    headerPage.assertHeaderInSpanTag(headerData.selectMetrics);

    metricsPage.clickAddMetric();

    metricsPage.clickLastBookDate();

    metricsPage.clickUpdateChanges();

    metricsPage.assertColumnIsDisplayed("last_booked_date");

    metricsPage.clickAddMetrics();

    headerPage.assertHeaderInSpanTag(headerData.selectMetrics);

    metricsPage.clickDelete();

    metricsPage.clickUpdateChanges();

    metricsPage.assertColumnIsNotDisplayed("last_booked_date");

    loginPage.logout();
  });
});
