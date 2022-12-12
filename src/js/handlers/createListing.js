import { createListing } from "../api/listings/create.js";

/**
 * Function that creates new listing
 *
 */

export async function setCreateListingListenerHome() {
  const form = document.querySelector("#createListingHome");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // form.reset();

      const form = event.target;
      const formObject = new FormData(form);

      const listing = Object.fromEntries(formObject.entries());

      listing.media = [listing.media];

      console.log("listing", listing);

      // const [title, body, tags, media, endsAt] = event.target;

      // const [title, body, tags, media, endsAt] = {
      // 	title: title.value,
      // 	description: body.value,
      // 	tags: [tags.value],
      // 	media: [media.value],
      // 	endsAt: endsAt.value,
      // };

      await createListing(listing);
      location.reload();
    });
  }
}
