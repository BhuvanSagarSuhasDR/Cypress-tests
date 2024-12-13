export function createProcessPayload() {
  return {
    listingId: "SUNSETPROPS_OLSE___533",
    demo: "No",
    fromWhere: "savingData",
    pmsName: "vrm",
    minPrice: 90,
    basePrice: 130,
    maxPrice: 400,
    source: "review-modal",
    syncChildren: "Y",
  };
}

export function processPayload(update, listingId = "SUNSETPROPS_OLSE___533") {
  return {
    ...createProcessPayload(listingId),
    ...update,
  };
}
