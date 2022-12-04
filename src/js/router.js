import * as listeners from "./handlers/index.js";
// import { createListing } from './api/listings/create.js';

// import { getListings } from './api/listings/read.js';
// import { getListingsAll } from './api/listings/readLoggedIn.js';
// import { displayListings } from './api/listings/read.js';
// // import { getBidListings } from './api/listings/readLoggedIn.js';

// getListings();
// getListingsAll();
// displayListings();

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/sign-in/":
      listeners.setLoginFormListener();
      return;
    case "/profile/sign-up/":
      listeners.setRegisterFormListener();
      return;
    case "/index.html":
      listeners.signOutBtn();
      return;
    // case '/profile/create-listings/':
    //   listeners.setCreateListingListener();
    //   return;
    // case '/profile/listings/':
    // 	listeners.setUpdateListingListener();
    // 	return;
    // case '/profile/my-profile/':
    // 	listeners.setUpdateProfileListener();
    // 	return;
  }
}

console.log(location.pathname);

// createListing({
//   title: "Example Listing",
//   body: "Example Body",
//   endsAt: "November 17, 2022"
// })
