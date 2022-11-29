import { API_BASE } from "../constants.js";

import * as storage from "../storage/index.js";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_BASE + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, credits, ...userProfile } = await response.json();
  // Saving Token and Profile to local storage
  storage.save("token", accessToken);
  storage.save("profile", userProfile);
  storage.save("credits", credits);
}
