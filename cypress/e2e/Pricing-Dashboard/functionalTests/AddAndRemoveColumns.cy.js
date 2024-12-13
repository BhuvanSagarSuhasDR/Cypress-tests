import { headerData } from "../../../fixtures/headerData";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import rowOrColumnPage from "../../../pages/RowOrColumnPage";

describe(["functionalTest"], "Row/Column Visibility Functionality", () => {
  let columnData;

  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
    cy.fixture("dashboardColumnData").then((data) => {
      columnData = data;
    });
  });

  it("should show and hide specific row accurately", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();
    headerPage.assertPageHeader(headerData.pricingDashboard);

    columnData.columnsVisibility.forEach((column) => {
      rowOrColumnPage.unselectAndAssertColumnVisibility(
        column.checkboxType,
        column.columnName
      );

      rowOrColumnPage.selectAndAssertColumnVisibility(
        column.checkboxType,
        column.columnName
      );
    });

    loginPage.logout();
  });
});
