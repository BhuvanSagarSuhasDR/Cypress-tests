import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";
import rowOrColumnPage from "../../../pages/RowOrColumnPage";

describe(["functionalTest"], "Row/Column Visibility Functionality", () => {
  let columnData;

  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
    cy.fixture("columnData").then((data) => {
      columnData = data;
    });
  });

  it("should show and hide specific row accurately", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();

    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    columnData.columns.forEach((column) => {
      rowOrColumnPage.selectAndAssertColumn(
        column.checkboxType,
        column.columnName
      );

      rowOrColumnPage.unselectAndAssertColumn(
        column.checkboxType,
        column.columnName
      );
    });

    loginPage.logoutFromMultiCalender();
  });
});
