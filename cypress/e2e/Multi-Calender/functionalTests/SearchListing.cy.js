import { listingData } from "../../../fixtures/listingData";
import headerPage from "../../../pages/HeaderPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";
import multiCalenderPage from "../../../pages/MultiCalenderPage";

describe(["functionalTest"], "Search Functionality", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should verify that the search filters listings based on user input and displays the correct results.", () => {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();
    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    multiCalenderPage.searchListing(listingData.listingId);

    multiCalenderPage.assertListingIsDisplayed(listingData.listingName);

    multiCalenderPage.clearSearch();
    loginPage.logoutFromMultiCalender();
  });
});
