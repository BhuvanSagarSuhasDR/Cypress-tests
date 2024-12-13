class PricingDashboardCountPage {
  get rowsDropDown() {
    return cy.get('[class="btn-group dropdown dropup"]');
  }

  clickGroup() {
    this.rowsDropDown.should("be.visible").scrollIntoView().click();
  }

  selectPricingDashboardCounts(count) {
    cy.contains("a.dropdown-item", count)
      .scrollIntoView()
      .click({ force: true });
  }

  assertListingCounts(expectedCount) {
    cy.contains("span", expectedCount)
      .scrollIntoView()
      .should("contain.text", expectedCount);
  }
}
export default new PricingDashboardCountPage();
