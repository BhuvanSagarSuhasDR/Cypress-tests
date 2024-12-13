import { processToggleSyncPricesPayload } from "../../fixtures/ApiToggleSyncPrices";
import ApiRequests from "../../utils/apiRequests.utils";

const apiRequests = new ApiRequests();

describe(["API"], "Verify Status Code and Sync in Response", () => {
  it("should verify status code is 200 and sync is either true or false in the response body", () => {
    cy.loginToPricelabs(Cypress.env("userName"), Cypress.env("password"));

    apiRequests.toggleSyncPrices(
      processToggleSyncPricesPayload({ push_status: false })
    );

    apiRequests.toggleSyncPrices(
      processToggleSyncPricesPayload({ push_status: true })
    );
  });
});
