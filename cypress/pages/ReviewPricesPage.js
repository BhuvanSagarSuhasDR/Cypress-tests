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

  clickReviewPrices() {
    this.reviewPricesButton.should("be.visible");
    this.reviewPricesButton.first({ timeout: 10000 }).click();
  }

  assertMinPrice(minPrice) {
    this.minPriceField.should("have.value", minPrice, { timeout: 20000 });
  }

  assertMaxPrice(maxPrice) {
    this.maxPriceField.should("have.value", maxPrice);
  }
}
export default new ReviewPricesPage();
