import ApiRequests from "../../utils/apiRequests.utils";

const apiRequests = new ApiRequests();

describe(["API"], "API Test for /multicalendar", () => {
  it("should return a valid response", () => {
    cy.loginToPricelabs(Cypress.env("userName"), Cypress.env("password"));

    apiRequests.getMulticalendarResponse();
  });
});
