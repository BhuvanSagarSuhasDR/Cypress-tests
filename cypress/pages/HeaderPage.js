class HeaderPage {
  get homeScreenHeader() {
    return cy.get('a[title="PriceLabs"]', { timeout: 50000 });
  }

  get tagHeader() {
    return cy.get('[qa-id="create-tag"]');
  }

  get h2Tag() {
    return cy.get("h2", { timeout: 50000 });
  }

  get h3Tag() {
    return cy.get("h3", { timeout: 50000 });
  }

  assertPageHeader(header) {
    this.h2Tag.should("contain", header);
  }

  assertH3Header(header) {
    this.h3Tag.should("contain", header);
  }

  assertHeaderIsDisplayed() {
    this.homeScreenHeader.should("be.visible");
  }

  assertTagHeaderIsDisplayed() {
    this.tagHeader.should("be.visible");
  }

  assertHeaderInPTag(header) {
    cy.contains("p", header, {
      timeout: 20000,
    }).should("be.visible");
  }

  assertHeaderInSpanTag(header) {
    cy.contains("span", header, {
      timeout: 20000,
    }).should("be.visible");
  }
}
export default new HeaderPage();
