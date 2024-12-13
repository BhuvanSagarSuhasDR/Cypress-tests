import { requestData } from "../fixtures/loginData";

export default class apiRequests {
  getPricelabsUserLogin(email, password) {
    const requestBody = requestData.getPricelabsLoginBody(email, password);

    return cy
      .request({
        method: "POST",
        url: "https://pricelabs.co/signin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestBody,
        form: true,
        followRedirect: false,
      })
      .then((response) => {
        expect(response.status).to.eq(302);

        const setCookieHeader = response.headers["set-cookie"];
        expect(setCookieHeader).to.exist;

        return setCookieHeader;
      });
  }

  getMulticalendarResponse() {
    return cy
      .request({
        method: "GET",
        url: "https://app.pricelabs.co/multicalendar",
        headers: {
          Accept: "text/html",
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers["content-type"]).to.contain("text/html");
        return response;
      });
  }

  processPricing(payload) {
    cy.request({
      method: "POST",
      url: "https://pricelabs.co/process",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
      form: true,
    }).then((response) => {
      expect(response.status).to.eq(200);

      const pricingData = response.body.graph_data.pricing_array[0];

      expect(pricingData).to.have.property("min_price");
      expect(pricingData.min_price).to.eq(payload.minPrice.toString());

      const reasonsJson = JSON.parse(pricingData.reasons_json);

      expect(reasonsJson.listing_info).to.have.property("maximum_price");
      expect(Number(reasonsJson.listing_info.maximum_price)).to.eq(
        payload.maxPrice
      );
    });
  }

  deleteListingRequest(url) {
    return cy
      .request({
        method: "POST",
        url: url,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: {
          mapped_data: {
            VRMREALTY___229___vrm: false,
          },
        },
        failOnStatusCode: false,
      })
      .then((response) => {
        cy.log(JSON.stringify(response.body));

        expect(response.status).to.eq(404);
        expect(response.body).to.have.property("status", "404");
        expect(response.body).to.have.property("error", "Not Found");
        expect(response.body).to.deep.equal({
          status: "404",
          error: "Not Found",
        });
      });
  }

  toggleSyncPrices(payload) {
    cy.request({
      method: "POST",
      url: "https://pricelabs.co/push_price_status",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.sync).to.eq(payload.push_status);
    });
  }
}
