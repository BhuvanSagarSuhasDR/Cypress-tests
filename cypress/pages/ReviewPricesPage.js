class ReviewPricesPage {
  get reviewPricesButton() {
    return cy.get("#review-prices");
  }

  get minPriceField() {
    return cy.get('[qa-id="min-price"]');
  }

  get maxPriceField() {
    return cy.get('[qa-id="max-price"]');
  }

  get dateOverrides() {
    return cy.get('[qa-id="dso-add-button"]');
  }

  get calenderDropDown() {
    return cy.get('[data-id="select_month_year"]', { timeout: 30000 });
  }

  get override() {
    return cy.get('[class="fc-title"]');
  }

  get minimumStayField() {
    return cy.get('[qa-id="dso-min-stay"]');
  }

  get updateButton() {
    return cy.get('[id="save-dso-btn"]');
  }

  get closeModal() {
    return cy.get('[qa-id="rp-modal-close"]');
  }

  get saveAndRefreshButton() {
    return cy.get('[qa-id="save-and-refresh"]');
  }

  clickSaveAndRefresh() {
    this.saveAndRefreshButton.should("be.visible").click();
  }

  clickCloseModal() {
    this.closeModal.should("be.visible").click();
  }

  clickUpdate() {
    this.updateButton.should("be.visible").click();
  }

  clickOverride() {
    this.override.should("be.visible").first().click();
  }

  selectMonth(month) {
    this.calenderDropDown.should("be.visible").click();
    cy.contains("span", month);
  }

  clickReviewPrices() {
    this.reviewPricesButton.should("be.visible");
    this.reviewPricesButton.first({ timeout: 10000 }).click();
  }

  clickAddDateOverrides() {
    this.dateOverrides.should("be.visible").click();
  }

  enterMinimumStay(value) {
    this.minimumStayField.should("be.visible").type(value);
  }

  enterMinValue(minValue) {
    this.minPriceField.should("be.visible").clear().type(minValue);
  }

  enterMaxValue(maxValue) {
    this.maxPriceField.should("be.visible").clear().type(maxValue);
  }

  assertMinPrice(minPrice) {
    this.minPriceField.should("have.value", minPrice, { timeout: 20000 });
  }

  assertMaxPrice(maxPrice) {
    this.maxPriceField.should("have.value", maxPrice);
  }
}
export default new ReviewPricesPage();
