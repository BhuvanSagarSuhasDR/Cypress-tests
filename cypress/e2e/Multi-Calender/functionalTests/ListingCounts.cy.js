import headerPage from "../../../pages/HeaderPage";
import listingCountPage from "../../../pages/ListingCountPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";

describe(["functionalTest"], "listing counts", () => {
  let listingCounts;
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
    cy.fixture("listingCounts").then((data) => {
      listingCounts = data.listingCounts; // Store the loaded data
    });
  });

  it("should show the proper listing count per page", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();
    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    listingCounts.forEach(({ option, range }) => {
      listingCountPage.selectListingCounts(option);

      listingCountPage.assertListingCounts(range);
    });

    loginPage.logoutFromMultiCalender();
  });
});
