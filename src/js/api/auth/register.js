// ========== Imports ==========

import { API_AUCTION_URL } from "../constants.js";

//========== This template module creates registration functionalities, and sends data to the API. ==========

const action = "/auth/register";
const method = "post";

/**
 * Function to register new user
 * @param {string} data
 * @returns new registered user
 */

export async function register(data) {
  const url = API_AUCTION_URL + action;
  const body = JSON.stringify(data);

  const options = {
    headers: {
      "Content-Type": "application/json;",
    },
    method,
    body,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      location.href = "../../profile/sign-in/";
    }
  } catch (err) {
    console.log(err);
  }
}
