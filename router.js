import * as listeners from "./handlers/index.js";
import { renderAuctionList, renderOwnListings } from './views/auctions/auctionList.js';
import { renderAuctionListHome } from "./views/auctions/auctionListHome.js";

// import { renderSearchedAuctionListHome } from "../js/views/auctions/auctionListHome.js";

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
      // listeners.setCreateListingListenerHome();
      renderAuctionList();
      return;
    case "/auction-house/":
      listeners.setSearchFormListenerHome();
      listeners.setCreateListingListenerHome();
      renderAuctionListHome();
      return;
    case "/profile/listings/":
      listeners.setCreateListingListenerHome();
      listeners.setSearchFormListener();
      renderOwnListings();
      // listeners.createListing();
      // listeners.setSearchFormListenerHome();
      // listeners.setUpdateListingListener();
      renderAuctionListHome();
    // 	return;
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
