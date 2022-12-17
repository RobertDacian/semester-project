import * as listeners from "./handlers/index.js";
import {
  renderAuctionList,
  renderOwnListings,
} from "./views/auctions/auctionList.js";
import { renderAuctionListHome } from "./views/auctions/auctionListHome.js";
import { renderProfile } from "./views/auctions/profile.js";

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
      listeners.setCreateListingListenerHome();
      renderAuctionListHome();
      return;
    case "/profile/listings/":
      listeners.setCreateListingListenerHome();
      listeners.setUpdateListingListener();
      listeners.setSearchFormListener();
      renderOwnListings();
      renderProfile();
      renderAuctionListHome();
      return;
    case "/profile/edit-listings/":
      listeners.setUpdateListingListener();
      return;
    case "/profile/my-profile/":
      listeners.setUpdateAvatarListener();
      renderProfile();
      return;
  }
}

console.log(location.pathname);
