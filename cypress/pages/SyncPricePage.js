import commonPage from "./CommonPage";

class SyncPricePage {
  get toggleButton() {
    return cy.get(".chakra-switch__input");
  }

  get syncPriceButton() {
    return cy.get('[aria-label="Sync Now"]');
  }

  clickSyncPrice() {
    this.syncPriceButton.should("be.visible").click();
  }

  assertToggleIsDisabled() {
    this.toggleButton.should("be.disabled");
  }

  assertValidationMessage() {
    commonPage.assertMessageVisible(
      `Please toggle the switch under "Sync Prices" to green(ON) to sync your prices overnight.`
    );
  }
}
export default new SyncPricePage();
