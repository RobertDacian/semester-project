// ========== Imports ==========

import { API_AUCTION_URL } from "../constants.js";
import * as storage from "../../storage/index.js";

//========== This template module creates log in functionalities, saves data to localStorage and sends data to the API. ==========

const action = "/auth/login";
const method = "POST";

/**
 * Function to log in user
 * @param {string} data
 * @returns logged in user
 */

export async function login(data) {
  const url = API_AUCTION_URL + action;
  const body = JSON.stringify(data);
  const options = {
    method,
    body,
    headers: {
      "Content-Type": "application/json;",
    },
  };

  try {
    const response = await fetch(url, options);
    const { accessToken, credits, avatar, ...userProfile } =
      await response.json();

    if (response.ok) {
      storage.save("token", accessToken);
      storage.save("profile", userProfile);
      storage.save("credits", credits);
      storage.save("avatar", avatar);
      location.href = "../../auction-house";
    }
  } catch (error) {
    console.log(error);
  }
}
