import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";
import { load } from "../../storage/index.js";

// Fetching all listings fot both, signed in user and not signed in user
const action = "/profiles";

export async function getProfile() {
  const { name } = load("profile");

  const url = `${API_AUCTION_URL}${action}/${name}`;

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
