class PricingDashboard {
  get searchField() {
    return cy.get('[placeholder="Enter a search term or value"]');
  }

  get tagHeader() {
    return cy.get('[qa-id="create-tag"]');
  }

  get h2Tag() {
    return cy.get("h2", { timeout: 50000 });
  }

  searchValue(listingId) {
    this.searchField
      .should("be.visible")
      .type(listingId, { delay: 100 })
      .type("{enter}");
  }

  assertPageHeader(header) {
    this.h2Tag.should("contain", header);
  }

  assertHeaderIsDisplayed() {
    this.homeScreenHeader.should("be.visible");
  }

  assertTagHeaderIsDisplayed() {
    this.tagHeader.should("be.visible");
  }

  assertsDisplayed(header) {
    cy.contains("h6", header, {
      timeout: 20000,
    }).should("be.visible");
  }
}
export default new PricingDashboard();
