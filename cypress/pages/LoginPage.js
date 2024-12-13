class LoginPage {
  get emailAddressField() {
    return cy.get("#user_email");
  }

  get passwordField() {
    return cy.get("#password-field");
  }

  get signInButton() {
    return cy.get('input[value="Sign in"]');
  }

  get userProfileButton() {
    return cy.get(".profile-name");
  }

  get userProfileInMultiCalender() {
    return cy.get('[id="menu-button-:Rut2nldaH1:"]');
  }

  get signOutButton() {
    return cy.get('[qa-id="logout-option"]');
  }

  get signOutButtonInMultiCalender() {
    return cy.get('[data-testid="LogoutIcon"]');
  }

  clickUserProfile() {
    this.userProfileButton.should("be.visible").click();
  }

  clickUserProfileInMultiCalender() {
    this.userProfileInMultiCalender.should("be.visible").click();
  }

  clickSignOutInMultiCalender() {
    this.signOutButtonInMultiCalender.should("be.visible").click();
  }

  clickSignOut() {
    this.signOutButton.should("be.visible").click();
  }

  login(userName, password) {
    cy.visit("");
    this.emailAddressField.should("be.visible").type(userName);
    this.passwordField.should("be.visible").type(password);
    this.signInButton.should("be.enabled").click();
  }

  logout() {
    this.clickUserProfile();
    this.clickSignOut();
  }

  logoutFromMultiCalender() {
    this.clickUserProfileInMultiCalender();
    this.clickSignOutInMultiCalender();
  }
}

export default new LoginPage();
