import * as listeners from "./handlers/index.js";
import { renderAuctionList } from "./views/auctions/auctionList.js";



// console.log("listeners", listeners.setSearchFormListener)
// import { getListings } from './api/listings/read.js';
// import { getListingsAll } from './api/listings/read.js';
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
    case "/":
    case "/index.html":
      listeners.setSearchFormListener();
      renderAuctionList();
      return;
    // case "/index.html":
    //   listeners.signOutBtn();
    //   return;
    // case '/profile/my-profile/':
    //   listeners.setUpdatePostListener();
    //   return;
    // case '/profile/edit/':
    //   listeners.setUpdateProfileListener();
    //   return;
  }
}

console.log(location.pathname);
