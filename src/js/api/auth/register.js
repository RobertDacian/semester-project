import { API_BASE } from "../constants.js";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_BASE + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  return result;
}
