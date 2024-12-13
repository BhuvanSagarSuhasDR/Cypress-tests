import { headerData } from "../../../fixtures/headerData";
import { listingData } from "../../../fixtures/listingData";
import { noteData } from "../../../fixtures/notes";
import commonPage from "../../../pages/CommonPage";
import headerPage from "../../../pages/HeaderPage";
import listingNotesPage from "../../../pages/ListingNotesPage";
import loginPage from "../../../pages/LoginPage";
import menuNavigationPage from "../../../pages/MenuNavigationPage";
import multiCalenderPage from "../../../pages/MultiCalenderPage";

describe(["e2e"], "Listing Notes", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });

  it("should add and delete notes successfully", function () {
    loginPage.login(Cypress.env("userName"), Cypress.env("password"));

    headerPage.assertHeaderIsDisplayed();

    menuNavigationPage.clickMenu();
    menuNavigationPage.clickMultiCalender();

    menuNavigationPage.assertUrlIsLoaded();

    multiCalenderPage.searchListing(listingData.listingId);

    multiCalenderPage.assertListingIsDisplayed(listingData.listingName);

    listingNotesPage.addNotes(noteData.notes);

    listingNotesPage.assertAlertMessage(listingData.listingName);
    commonPage.clickClose();

    listingNotesPage.clickAddNotes();
    listingNotesPage.clickAllNotes();

    headerPage.assertHeaderInPTag(headerData.allNotes);

    listingNotesPage.clickEdit();

    listingNotesPage.updatenotes(noteData.updateNotes);

    listingNotesPage.assertAlertMessage(listingData.listingName, "updated");

    commonPage.clickClose();

    headerPage.assertHeaderInPTag(headerData.allNotes);

    commonPage.clickClose();

    listingNotesPage.clickAddNotes();

    listingNotesPage.assertUpdatedNotes(noteData.updateNotes);

    listingNotesPage.clickRecentNotes(noteData.updateNotes);

    listingNotesPage.clickDelete();
    listingNotesPage.clickDeleteNote();

    listingNotesPage.assertAlertMessage(listingData.listingName, "deleted");

    loginPage.logoutFromMultiCalender();
  });
});
