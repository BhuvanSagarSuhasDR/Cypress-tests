class DummyListingPage {
  get createDummyListingButton() {
    return cy.get('[data-bs-target="#add-test-listings-modal"]');
  }

  get continueButton() {
    return cy.get('[data-orientation="next"]');
  }

  get cancelButton() {
    return cy.get('[data-orientation="cancel"]');
  }

  clickCreateDummyListing() {
    this.createDummyListingButton.should("be.visible").click();
  }

  clickContinue() {
    this.continueButton.should("be.enabled").click();
  }

  clickCancel() {
    this.cancelButton.should("be.enabled").click();
  }

  assertValueIsDisplayed(value) {
    this.spanText.should("contain", value);
  }

  assertMessageVisible(message) {
    cy.contains("p", message).should("be.visible").and("contain", message);
  }
}
export default new DummyListingPage();
