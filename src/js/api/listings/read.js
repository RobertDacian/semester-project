import { API_AUCTION_URL } from "../constants.js";

export async function getListings() {
  const response = await fetch(`${API_AUCTION_URL}/listings`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function searchListings(searchTerm) {
  const response = await fetch(
    `${API_AUCTION_URL}/listings?_tag=${searchTerm}`
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
