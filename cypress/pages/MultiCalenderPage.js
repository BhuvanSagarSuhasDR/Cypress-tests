class MultiCalenderPage {
  get searchField() {
    return cy.get('[qa-id="mc-search-listings-input"]');
  }

  get clearSearchIcon() {
    return cy.get('[qa-id="clear-search-mc"]');
  }

  searchListing(listingId) {
    this.searchField
      .clear()
      .should("be.visible")
      .type(listingId, { delay: 100 })
      .type("{enter}");
  }

  clearSearch() {
    this.clearSearchIcon.should("be.visible").click();
  }

  assertListingIsDisplayed(listingName) {
    cy.contains("p", `${listingName}`).should("have.text", listingName);
  }
}
export default new MultiCalenderPage();
