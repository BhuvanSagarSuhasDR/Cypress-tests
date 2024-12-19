import ApiRequests from "../utils/apiRequests.utils";

const apiRequests = new ApiRequests();

Cypress.Commands.add("loginToPricelabs", (email, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  return apiRequests.getPricelabsUserLogin(email, password);
});

Cypress.Commands.add("visitPricingPage", () => {
  cy.visit("https://pricelabs.co/pricing");
});
