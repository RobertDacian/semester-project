// ========== Imports ==========
import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";

//========== This template module removes all the listings from the the API. ==========

const action = "/listings";
const method = "DELETE";

/**
 * Function to remove listing
 * @param {string} data
 * @returns nothing
 */

export async function removeListing(id) {
  if (!id) {
    throw new Error("Delete requires a listingID");
  }

  const url = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(url, {
    method,
    // body: JSON.stringify(id),
  });

  const results = await response.json();
  console.log(results);
  // return await response.json(); // this is a shorter way to return results

  return results;
}
