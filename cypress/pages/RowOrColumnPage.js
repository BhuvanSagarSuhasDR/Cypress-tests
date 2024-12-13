class RowOrColumnPage {
  get rowOrColumnDropdown() {
    return cy.get('[qa-id="row-col-visibility"] button');
  }

  get rowOrColumnVisibilityDropDown() {
    return cy.get('[id="btn_group_drop_one"]');
  }

  getCheckbox(checkboxType) {
    return cy.get(`[qa-id="mc-${checkboxType}-checkbox"] input`);
  }

  getRowOrColumnCheckbox(checkboxType) {
    return cy.get(`[qa-id="${checkboxType}-checkbox"]`);
  }

  clickRowOrColumnVisibility() {
    this.rowOrColumnVisibilityDropDown
      .should("be.visible")
      .wait(1000)
      .click({ force: true });
  }

  clickRowOrColumn() {
    this.rowOrColumnDropdown.should("be.visible").wait(1000).click();
  }

  checkCheckbox(checkboxType) {
    this.getCheckbox(checkboxType)
      .should("be.visible")
      .wait(100)
      .check({ force: true })
      .should("be.checked");
  }

  uncheckCheckbox(checkboxType) {
    this.getCheckbox(checkboxType)
      .should("be.visible")
      .wait(100)
      .uncheck({ force: true })
      .should("not.be.checked");
  }

  checkRowOrColumnCheckbox(checkboxType) {
    this.getRowOrColumnCheckbox(checkboxType)
      .should("be.visible")
      .wait(100)
      .check()
      .should("be.checked");
  }

  uncheckRowOrColumnCheckbox(checkboxType) {
    this.getRowOrColumnCheckbox(checkboxType)
      .should("be.visible")
      .wait(100)
      .uncheck()
      .should("not.be.checked");
  }

  selectAndAssertColumn(checkboxType, columnName) {
    this.clickRowOrColumn();
    this.checkCheckbox(checkboxType);
    this.clickRowOrColumn();
    this.assertColumnIsDisplayed(columnName);
  }

  unselectAndAssertColumn(checkboxType, columnName) {
    this.clickRowOrColumn();
    this.uncheckCheckbox(checkboxType);
    this.clickRowOrColumn();
    this.assertColumnIsNotDisplayed(columnName);
  }

  selectAndAssertColumnVisibility(checkboxType, columnName) {
    this.clickRowOrColumnVisibility();
    this.checkRowOrColumnCheckbox(checkboxType);
    this.clickRowOrColumnVisibility();
    this.assertColumnIsVisible(columnName);
  }

  unselectAndAssertColumnVisibility(checkboxType, columnName) {
    this.clickRowOrColumnVisibility();
    this.uncheckRowOrColumnCheckbox(checkboxType);
    this.clickRowOrColumnVisibility();
    this.assertColumnIsNotVisible(columnName);
  }

  assertColumnIsDisplayed(columnName) {
    cy.contains("p", columnName, { timeout: 20000 }).should("be.visible");
  }

  assertColumnIsNotDisplayed(columnName) {
    cy.contains("p", columnName, { timeout: 20000 }).should("not.be.visible");
  }

  assertColumnIsVisible(columnName) {
    cy.contains("label", columnName, { timeout: 20000 }).should(
      "contain.text",
      columnName
    );
  }

  assertColumnIsNotVisible(columnName) {
    cy.contains("label", columnName, { timeout: 20000 }).should(
      "contain.text",
      columnName
    );
  }
}
export default new RowOrColumnPage();
