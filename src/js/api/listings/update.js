//This is a template module for updating a post with method "PUT" to send data to the API, use this anytime you need to update a post with User Authentication.

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

  const results = await response.json();
  console.log(results);

  // return await response.json(); // this is a shorter way to return results

  return results;
}
