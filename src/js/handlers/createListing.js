import { createListing } from "../api/listings/create.js";

/**
 * Function that creates new listing
 */
export function setCreateListingListenerHome() {
  const form = document.querySelector("#createListingHome");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const [title, description, tags, media, endsAt] = event.target.elements;

      const date = new Date(endsAt.value).toISOString();

      let listingData = {
        title: title.value,
        description: description.value,
        tags: [tags.value],
        media: [media.value],
        endsAt: date,
      };

      console.log(listingData);

      createListing(listingData);

      // form.reset();
      location.reload();

      // Delete the media if empty
      if (listingData.media === "" || listingData.media === []) {
        delete listingData.media;
      }
    });
  }
}
