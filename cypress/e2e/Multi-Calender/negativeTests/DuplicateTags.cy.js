import { listingData } from "../../../fixtures/ListingData";
import { tagsData } from "../../../fixtures/TagsData";
import { validationTexts } from "../../../fixtures/ValidationTexts";
import commonPage from "../../../pages/CommonPage";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";
import multiCalenderPage from "../../../pages/MultiCalenderPage";
import rowOrColumnPage from "../../../pages/RowOrColumnPage";
import tagsPage from "../../../pages/TagsPage";

describe(["negativeTest"], "Adding Duplicate Tags", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();

    const columnName = "Tags";

    cy.fixture("columnData").then((data) => {
      this.columnData = data.columns.filter(
        (col) => col.columnName === columnName
      );
    });
  });

  it("should prevent adding duplicate tags to a listing", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();
    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    this.columnData.forEach((column) => {
      rowOrColumnPage.selectAndAssertColumn(
        column.checkboxType,
        column.columnName
      );

      multiCalenderPage.searchListing(listingData.listingId);

      multiCalenderPage.assertListingIsDisplayed(listingData.listingName);

      tagsPage.clickAddNewtag();

      headerPage.assertTagHeaderIsDisplayed();

      tagsPage.addNewTag(tagsData.tagName);

      tagsPage.assertAlertMessage(validationTexts.tagsHaveBeenUpdated);

      commonPage.clickClose();

      tagsPage.assertTagNameIsDisplayed(tagsData.tagName);

      tagsPage.clickAddNewtag();

      headerPage.assertTagHeaderIsDisplayed();

      tagsPage.addNewTag(tagsData.tagName);

      cy.log(validationTexts.tagAlreadyExists);

      tagsPage.assertTagValidationMessage(validationTexts.tagAlreadyExists);

      tagsPage.clickClear();

      tagsPage.assertAlertMessage(validationTexts.tagsHaveBeenUpdated);

      loginPage.logoutFromMultiCalender();
    });
  });
});
