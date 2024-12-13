class ListingNotesPage {
  get addNotesIcon() {
    return cy.get('button[aria-label="add-notes-icon"]');
  }

  get enterNoteField() {
    return cy.get('[qa-id="listing-notes"]');
  }

  get updateNoteField() {
    return cy.get('[qa-id="update-listing-notes"]');
  }

  get saveNotesButton() {
    return cy.get('[qa-id="add-note-save-btn"]');
  }

  get allNoteButton() {
    return cy.contains("button", "All Notes");
  }

  get editIcon() {
    return cy.get(".css-4t4tk8").click();
  }

  get deleteButton() {
    return cy.get('[aria-label="Delete Note"]');
  }

  get deleteNote() {
    return cy.contains("button", "Delete");
  }

  clickDeleteNote() {
    this.deleteNote.should("be.visible").click();
  }

  clickDelete() {
    this.deleteButton.should("be.enabled").click();
  }

  clickEdit() {
    this.editIcon.click({ force: true });
  }

  clickAddNotes() {
    this.addNotesIcon.should("be.visible").click();
  }

  clickAllNotes() {
    this.allNoteButton.click();
  }

  clickSaveNotes() {
    this.saveNotesButton.should("be.visible").click();
  }

  clickRecentNotes(updatedNotes) {
    cy.contains("p", updatedNotes, {
      timeout: 20000,
    })
      .should("be.visible")
      .click();
  }

  enterNotes(notes) {
    this.enterNoteField.should("be.visible").type(notes);
  }

  addNotes(notes) {
    this.clickAddNotes();
    this.enterNotes(notes);
    this.clickSaveNotes();
  }

  updatenotes(notes) {
    this.updateNoteField.should("be.visible").clear().type(notes);
    this.clickSaveNotes();
  }

  assertHeaderIsDisplayed() {
    this.homeScreenHeader.should("be.visible");
  }

  assertTagHeaderIsDisplayed() {
    this.tagHeader.should("be.visible");
  }

  assertAlertMessage(listingName, action = "added") {
    const message = `Note has been successfully ${action} for ${listingName}`;
    cy.contains("p", message, {
      timeout: 30000,
    }).should("be.visible");
  }

  assertUpdatedNotes(updatedNotes) {
    cy.contains("p", updatedNotes, {
      timeout: 20000,
    }).should("be.visible");
  }
}
export default new ListingNotesPage();
