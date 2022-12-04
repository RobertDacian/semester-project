import * as listeners from "./handlers/index.js";
import { renderAuctionList } from "./views/auctions/auctionList.js";
import { renderAuctionListHome } from "./views/auctions/auctionListHome.js";

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
    case "/auction-house/":
      listeners.setSearchFormListenerHome();
      renderAuctionListHome();
      return;
    // case '/index.html/':
    //   listeners.signOutBtn();
    //   return;
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
