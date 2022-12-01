import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

const action = "/listings";
const method = "put";

export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Update requires a listingID");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${listingData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
