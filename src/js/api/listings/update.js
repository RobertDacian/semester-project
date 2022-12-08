// ========== Imports ==========
import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";
import { load } from "../../storage/index.js";

const action = "/listings";
const method = "PUT";

//========== This template module updates the listing and sends the data to the API. ==========

export async function updateListing(data) {
  if (!data.id) {
    throw new Error("Update requires an ID");
  }

  const url = `${API_AUCTION_URL}${action}/${data.id}`;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(data),
  });

  const results = await response.json();

  console.log(results);

  return results;
}

//========== This template module updates the avatar and sends the data to the API. ==========

/**
 * Function to update avatar
 * @param {string} data
 * @returns
 */

export async function updateAvatar(data) {
  const { name } = load("profile");

  if (!name) {
    throw new Error("Please provide name");
  }

  const url = `${API_AUCTION_URL}${action}/${name}/media`;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(data),
  });

  const results = await response.json();

  console.log(results);

  return results;
}
