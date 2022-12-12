import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";
import { getProfileName, getAvatar } from "../../storage/helpers.js";

// Fetching all listings fot both, signed in user and not signed in user
// const action = '/listings';

export async function getProfile() {
  const name = getProfileName();
  const media = getAvatar();

  if (!name) {
    return [];
  }

  const url = `${API_AUCTION_URL}${name}${media}`;
  console.log(url);

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
