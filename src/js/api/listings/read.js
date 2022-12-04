import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";
// import { message } from "../../components/messages.js";

// Fetching all listings fot both, signed in user and not signed in user

const action = "/listings";

export async function getListings() {
  const allListingsUrl = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(allListingsUrl);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

// Search functionality

export async function searchListings(searchTerm) {
  const searchedListingsUrl = `${API_AUCTION_URL}${action}?_tag=${searchTerm}`;

  const response = await authFetch(searchedListingsUrl);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
