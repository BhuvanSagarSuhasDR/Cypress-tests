class AddOrReconnectListing {
  get addOrReconnectListingButton() {
    return cy.get('[data-bs-target="#modal_add_listings"]');
  }

  get searchBox() {
    return cy.get('[aria-controls="bs-select-4"]');
  }

  get connectButton() {
    return cy.get('[id="submit"]');
  }

  get cancelButton() {
    return cy.get('[id="cancel-btn"]');
  }

  getSelectPMS(pmsValue) {
    return cy
      .contains("span", pmsValue, { timeout: 10000 })
      .should("be.visible");
  }

  clickConnect() {
    this.connectButton.should("be.visible").click();
  }

  clickCancel() {
    this.cancelButton.should("be.visible").click();
  }

  selectPMS(pmsValue) {
    this.getSelectPMS(pmsValue).click();
  }

  clickAddOrReconnectListing() {
    this.addOrReconnectListingButton.should("be.visible").click();
  }

  searchPMS(value) {
    this.searchBox.should("be.visible").type(value);
  }

  assertValueIsDisplayed(value) {
    this.spanText.should("contain", value);
  }

  assertMessageVisible() {
    cy.contains("h4", "API key field is empty").should("be.visible");
  }
}
export default new AddOrReconnectListing();
