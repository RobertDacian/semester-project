import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";

const action = "/listings";

export async function getListings() {
  const getPostURL = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}

export async function getListing(id) {
  if (!id) {
    throw new Error("Get requires a listingID");
  }

  const getPostURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
