class MetricsPage {
  get addMetricsDropDown() {
    return cy.get('[id="addMetricsButton"]');
  }

  get spanText() {
    return cy.get("span", { timeout: 50000 });
  }

  get addMetricsButton() {
    return cy
      .get("performance-metrics-selector")
      .shadow()
      .find("div[data-action-add-metric]");
  }

  get lastBookedDate() {
    return cy
      .get("performance-metrics-selector")
      .shadow()
      .find("performance-metrics-menu")
      .shadow()
      .find('div[slot="label"]')
      .contains("Last Booked Date");
  }

  get updatedChangesButton() {
    return cy.get('[id="updateMetricsPreferences"]');
  }

  get deleteMetrics() {
    return cy
      .get("performance-metrics-selector")
      .shadow()
      .find("div[data-action-delete-row]");
  }

  getColumnHeader(columnName) {
    return cy.get(`[data-field="${columnName}"]`);
  }

  clickDelete() {
    this.deleteMetrics.wait(500).click();
  }

  clickUpdateChanges() {
    this.updatedChangesButton.should("be.visible").click({ force: true });
  }

  clickAddMetrics() {
    this.addMetricsDropDown.should("be.visible").click();
  }

  clickAddMetric() {
    this.addMetricsButton.should("be.visible").click();
  }

  clickLastBookDate() {
    this.lastBookedDate.should("be.visible").click({ force: true });
  }

  assertValueIsDisplayed(value) {
    this.spanText.should("contain", value);
  }

  assertColumnIsDisplayed(columnName) {
    this.getColumnHeader(columnName).should("be.visible", { timeout: 30000 });
  }

  assertColumnIsNotDisplayed(columnName) {
    this.getColumnHeader(columnName).should("not.exist");
  }
}
export default new MetricsPage();
