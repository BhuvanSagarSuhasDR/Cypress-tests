import ApiRequests from "../utils/apiRequests.utils";

const apiRequests = new ApiRequests();

Cypress.Commands.add("loginToPricelabs", (email, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  return apiRequests.getPricelabsUserLogin(email, password).then((cookies) => {
    cookies.forEach((cookie) => {
      const [name, value] = cookie.split(";")[0].split("=");
      cy.setCookie(name, value);
    });
  });
});

Cypress.Commands.add("visitPricingPage", () => {
  cy.visit("https://pricelabs.co/pricing");
});
