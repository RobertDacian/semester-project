import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";
import { getProfileName } from "../../storage/helpers.js";

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

// Getting my own listings on the profile page

export async function getOwnListings() {
  const name = getProfileName();

  if (!name) {
    return [];
  }

  const url = `${API_AUCTION_URL}/profiles/${name}${action}`;

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const name = params.get('name');

// // Get the auth token

// export async function getListing() {

// 	const singleListingURL = `${API_AUCTION_URL}${profiles}/name/listings`;

// 	const response = await authFetch(singleListingURL, {});

// 	const results = await response.json();
// 	console.log(results);
// 	// return await response.json(); // this is a shorter way to return results

//   if (response.ok) {
//     location.href = '../listings';

// 		return results;
//  }
// }
