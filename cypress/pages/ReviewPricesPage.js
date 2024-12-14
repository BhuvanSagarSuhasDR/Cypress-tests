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
    return cy.get('[qa-id="dso-min-stay"]', { timeout: 30000 });
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

  get groupCustomizationDropDown() {
    return cy.get('[data-id="group-customization-options"]');
  }

  get backButton() {
    return cy.get('[qa-id="rp-back-button"]');
  }

  clickBack() {
    this.backButton.should("be.visible").click();
  }

  clickGroupCustomization() {
    this.groupCustomizationDropDown.should("be.visible").click();
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
    this.override.should("be.visible").first().click({ force: true });
  }

  clickAddDateOverrides() {
    this.dateOverrides.should("be.visible").click();
  }

  clickReviewPrices() {
    this.reviewPricesButton.should("be.visible");
    this.reviewPricesButton.first({ timeout: 10000 }).click();
  }

  selectMonth(month) {
    this.calenderDropDown.should("be.visible");
    this.calenderDropDown.click();
    cy.contains("span", month).click();
  }

  selectGroupName(name) {
    cy.get("a.dropdown-item").contains(name).click();
  }

  enterMinimumStay(value) {
    this.minimumStayField.should("be.visible").clear().type(value);
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

  assertMinStay(value) {
    this.minimumStayField.should("have.value", value);
  }
}
export default new ReviewPricesPage();
