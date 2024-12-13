class ListingCountPage {
  get listingCountDropDown() {
    return cy.get('[id="mc-listing-count-select-v2"]');
  }

  get tagHeader() {
    return cy.get('[qa-id="create-tag"]');
  }

  selectListingCounts(countOption) {
    this.listingCountDropDown.should("be.visible").select(countOption);
  }

  assertHeaderIsDisplayed() {
    this.homeScreenHeader.should("be.visible");
  }

  assertListingCounts(counts) {
    cy.contains("p", counts).should("be.visible");
  }
}
export default new ListingCountPage();
