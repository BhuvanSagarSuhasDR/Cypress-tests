import commonPage from "./CommonPage";

class TagsPage {
  get addtagsButton() {
    return cy.get('[id="mc-add-tags"]');
  }

  get tagField() {
    return cy.get('[data-group="true"] input').last();
  }

  get saveButton() {
    return cy.get('[data-testid="CheckIcon"]');
  }

  get clearIcon() {
    return cy.get('[data-testid="ClearIcon"]');
  }

  enterTagName(tagName) {
    this.tagField.should("be.enabled").type(tagName);
  }

  clickSave() {
    this.saveButton.should("be.visible").click();
  }

  clickClear() {
    this.clearIcon.should("be.visible").click();
  }

  clickAddNewtag() {
    this.addtagsButton.should("be.visible").wait(1000);
    this.addtagsButton.click();
  }

  addNewTag(tagName) {
    this.enterTagName(tagName);
    this.clickSave();
  }

  assertHeaderIsDisplayed() {
    this.homeScreenHeader.should("be.visible");
  }

  assertTagNameIsDisplayed(tagName) {
    cy.contains("p", tagName, { timeout: 20000 }).should("be.visible");
  }

  assertTagNameIsNotDisplayed(tagName) {
    cy.contains("p", tagName, { timeout: 20000 }).should("not.exist");
  }

  assertAlertMessage() {
    commonPage.assertMessageVisible("Tags have been updated!");
  }

  assertTagValidationMessage() {
    commonPage.assertMessageVisible("Tag already exists");
  }
}
export default new TagsPage();
