// import { getListings } from '../api/listings/read.js';
import { getListings, updateListing } from "../api/listings/index.js";

/**
 * Function that creates new listing
 *
 */

export async function setUpdateListingListener() {
  const form = document.querySelector(
    "#editListingProfile1, #editListingProfile"
  );

  // const updateBtn = document.querySelector('updateBtn');

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const update = await getListings(id);
    form.title.value = update.title;
    form.description.value = update.description;
    form.tags.value = update.tags;
    form.media.value = update.media;
    form.endsAt.value = update.endDate;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // form.reset();
      const form = event.target;
      const data = new FormData(form);
      // const listings = Object.fromEntries(data.entries());
      // data.id = id;
      // listings.media = [listings.media];
      const title = data.get("title");
      const description = data.get("description");
      const endsAt = data.get("endsAt");
      const media = data.get("media").split(", ");
      const tags = data.get("tags").split(", ");

      const listingsData = { id, title, description, endsAt, media, tags };

      console.log("listing", listingsData);

      await updateListing(listingsData);

      location.href = "../../profile/listings";
    });
  }
}
