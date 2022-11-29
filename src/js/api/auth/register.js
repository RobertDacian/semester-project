import { AUCTION_API_BASE } from "../constants.js";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = AUCTION_API_BASE + action;
  const body = JSON.stringify(profile);

  const options = {
    headers: {
      "Content-Type": "application/json;",
    },
    method,
    body,
  };

  try {
    const response = await fetch(registerURL, options);
    const result = await response.json();
    console.log(result);

    if (response.ok) {
      location.href = "../../profile/sign-in/";
    }
  } catch (err) {
    console.log(err);
  }
}
