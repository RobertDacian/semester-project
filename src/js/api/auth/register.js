// import { API_AUCTION_URL } from "../constants.js";

// const action = "/auth/register";
// const method = "post";

// export async function register(profile) {
//   const registerURL = API_AUCTION_URL + action;
//   const body = JSON.stringify(profile);

//   const options = {
//     headers: {
//       "Content-Type": "application/json;",
//     },
//     method,
//     body,
//   };

//   try {
// 		const response = await fetch(registerURL, options);
// 		const result = await response.json();
// 		console.log(result);

// 		if (response.ok) {
// 			location.href = '../../profile/sign-in/';
// 		}
// 	} catch (err) {
//       console.log(err)
// }
// }

import { API_AUCTION_URL } from "../constants.js";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
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
