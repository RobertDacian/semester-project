import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

const action = "/listings";
const method = "delete";

export async function removeListing(id) {
  if (!id) {
    throw new Error("Delete requires a listingID");
  }

  const updateListingURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(updateListingURL, {
    method,
    // body: JSON.stringify(listingData),
  });

  return await response.json();
}
