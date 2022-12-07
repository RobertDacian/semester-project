//This is a template module for deleting a post with method "DELETE". This will delete the data from the API, use this anytime you need to delete a post with User Authentication.

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

  const results = await response.json();
  console.log(results);
  // return await response.json(); // this is a shorter way to return results

  return results;
}
