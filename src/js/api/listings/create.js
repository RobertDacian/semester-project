//This is a template module for updating a post with method "POST" to send data to the API, use this anytime you need to create a post with User Authentication.

import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

/**
 * Function to create a new listing
 * @param {string} data
 * @returns new auction listing
 */

const action = "/listings";
const method = "POST";

export async function createListing(data) {
  const createListingURL = `${API_AUCTION_URL}${action}`;

  data.tags = [data.tags];

  if (!data.tags) {
    delete data.tags;
  }

  if (!data.media) {
    delete data.media;
  }

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  }
}
