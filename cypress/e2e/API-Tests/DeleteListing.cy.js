import ApiRequests from "../../utils/apiRequests.utils";

const apiRequests = new ApiRequests();

describe(["API"], "Negative API Test for incorrect URL", () => {
  it("should return 404 for an incorrect URL", () => {
    const incorrectUrl = "https://pricelabs.co/invalid_delete_listing1";

    apiRequests.deleteListingRequest(incorrectUrl);
  });
});
