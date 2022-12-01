// import { AUCTION_API_BASE } from '../constants.js';

// import * as storage from '../../storage/index.js';

// const action = "/auth/login";
// const method = "post";

// export async function login(profile) {
//   const loginURL = AUCTION_API_BASE + action;
//   const body = JSON.stringify(profile);
//   const options = {
//     headers: {
//       "Content-Type": "application/json;",
//     },
//     method,
//     body,
//   };

//   try {
//     const response = await fetch(loginURL, options);
//     const { accessToken, credits, avatar, ...userProfile } =
//       await response.json();

//     if (response.ok) {
//       storage.save("token", accessToken);
//       storage.save("profile", userProfile);
//       storage.save("credits", credits);
//       storage.save("avatar", avatar);
//       location.href = "../../auction-house";
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

import { API_AUCTION_URL } from "../constants.js";
import * as storage from "../../storage/index.js";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  const options = {
    method,
    body,
    headers: {
      "Content-Type": "application/json;",
    },
  };

  try {
    const response = await fetch(loginURL, options);
    const { accessToken, credits, avatar, ...userProfile } =
      await response.json();

    if (response.ok) {
      storage.save("token", accessToken);
      storage.save("profile", userProfile);
      storage.save("credits", credits);
      storage.save("avatar", avatar);
      location.href = "../../auction-house";
    }
  } catch (err) {
    console.log(err);
  }
}
