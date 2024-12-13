class CommonPage {
  get closeButton() {
    return cy.get('[aria-label="Close"]');
  }

  get spanText() {
    return cy.get("span", { timeout: 50000 });
  }

  clickClose() {
    this.closeButton.should("be.visible").first().click();
  }

  assertValueIsDisplayed(value) {
    this.spanText.should("contain", value);
  }

  assertMessageVisible(messages) {
    if (Array.isArray(messages)) {
      messages.forEach((message) => {
        cy.contains("p", message).should("be.visible").and("contain", message);
      });
    } else {
      cy.contains("p", messages).should("be.visible").and("contain", messages);
    }
  }
}
export default new CommonPage();
