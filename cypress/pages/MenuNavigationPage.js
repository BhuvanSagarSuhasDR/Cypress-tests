class MenuNavigationPage {
  get menuDropDown() {
    return cy.get('[qa-id="nav-item-title"]');
  }

  get multiCalenderOption() {
    return cy.get('[qa-id="dropdown-value-mcp-v2"]');
  }

  clickMenu() {
    this.menuDropDown.should("be.visible").click();
  }

  clickMultiCalender() {
    this.multiCalenderOption.should("be.visible").click();
  }

  assertUrlIsLoaded() {
    cy.url().should("include", "/multicalendar");
  }
}
export default new MenuNavigationPage();
