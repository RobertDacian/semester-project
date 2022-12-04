import { searchListings } from "../api/listings/read.js";
import { renderSearchedAuctionList } from "../views/auctions/auctionList.js";

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
