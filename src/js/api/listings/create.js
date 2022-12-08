// ========== Imports ==========
import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";

//========== This template module creates all the listings and sends them to the  API. ==========

const action = "/listings";
const method = "POST";

/**
 * Function to create a new listing
 * @param {string} data
 * @returns new listing
 */

export async function createListing(data) {
  const url = `${API_AUCTION_URL}${action}`;

  data.tags = [data.tags];

  if (!data.tags) {
    delete data.tags;
  }

  if (!data.media) {
    delete data.media;
  }

  if (!data.description) {
    delete data.body;
  }

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  }
}
