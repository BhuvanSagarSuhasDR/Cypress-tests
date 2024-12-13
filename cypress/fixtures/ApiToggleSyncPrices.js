export function createToggleSyncPricesPayload(listingId = "VRMREALTY___110") {
  return {
    push_status: true,
    listing_id: listingId,
    pms_name: "vrm",
  };
}

export function processToggleSyncPricesPayload(
  update,
  listingId = "VRMREALTY___110"
) {
  return {
    ...createToggleSyncPricesPayload(listingId),
    ...update,
  };
}
