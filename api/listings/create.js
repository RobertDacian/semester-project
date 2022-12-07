//This is a template module for updating a post with method "POST" to send data to the API, use this anytime you need to create a post with User Authentication.

import { API_AUCTION_URL } from "../constants.js";

import { authFetch } from "../authFetch.js";

// const action = "/listings";
// const method = "post";

// /**
//  * Function to create a new listing
//  * @param {string} listingData
//  * @returns new auction listing
//  */

// export async function createListing() {
// 	const createListingURL = { API_AUCTION_URL } + action;

// 	const response = await authFetch(createListingURL, {
// 		method,
// 		body: JSON.stringify(),
// 	});

// 	const results = await response.json();
// 	console.log(results);
// 	// return await response.json(); // this is a shorter way to return results

// 	return results;
// }

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

  // if (!data.body) {
  //   delete data.body;
  // }

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  }
}
