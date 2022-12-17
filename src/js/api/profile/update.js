// // ========== Imports ==========
import { API_AUCTION_URL } from "../constants.js";
import { load } from "../../storage/index.js";

// import { getProfileName} from '../../storage/helpers.js';
import { authFetch } from "../authFetch.js";

// //========== This template module updates the avatar and sends the data to the API. ==========

const action = "/profiles";
const method = "PUT";

// /**
//  * Function to update avatar
//  * @param {string} data
//  * @returns
//  */

export async function updateAvatar(data) {
  const { name } = load("profile");
  // const data.avatar = getProfileAvatar();

  if (!name) {
    throw new Error("Please provide media");
  }

  const updateUrl = `${API_AUCTION_URL}${action}/${name}/media`;

  const response = await authFetch(updateUrl, {
    method,
    body: JSON.stringify(data),
  });

  const results = await response.json();

  console.log(results);

  return results;
}
