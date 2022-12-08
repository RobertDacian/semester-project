// import { getListings } from '../api/listings/read.js';
import { updateListing } from "../api/listings/index.js";

/**
 * Function that creates new listing
 *
 */

export async function setUpdateListingListener() {
  const form = document.querySelector(
    "#editListingProfile1, #editListingProfile"
  );

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    // const listing = await getListings(id);
    // form.title.value = listing.title;
    // form.description.value = listing.description;
    // form.tags.value = listing.tags;
    // form.media.value = listing.media;
    // form.endsAt.value = listing.endDate;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // form.reset();

      const form = event.target;
      const formObject = new FormData(form);
      const listings = Object.fromEntries(formObject.entries());
      listings.id = id;
      listings.media = [listings.media];
      // const listings = { id, title, description, endsAt, media, tags };

      console.log("listing", listings);

      await updateListing(listings);
      // location.reload();
    });
  }
}
