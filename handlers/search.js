import { searchListings } from "../api/listings/read.js";
import { renderSearchedAuctionList } from "../views/auctions/auctionList.js";
import { renderSearchedAuctionListHome } from "../views/auctions/auctionListHome.js";

// ===== Render search on home page (IF USER IS NOT SIGNED IN) =====

export function setSearchFormListener() {
  const form = document.querySelector("#searchForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const searchTerm = formData.get("search");

      const auctions = await searchListings(searchTerm);
      console.log(auctions);

      renderSearchedAuctionList(auctions);
    });
  }
}

// ===== Render search on home page (IF USER IS SIGNED IN) =====

export function setSearchFormListenerHome() {
  const form = document.querySelector("#searchFormHome");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const searchTerm = formData.get("search");
      // searchTerm.toLowerCase().includes(searchTerm);

      const auctionsHome = await searchListings(searchTerm);
      console.log(auctionsHome);

      renderSearchedAuctionListHome(auctionsHome);
    });
  }
}
