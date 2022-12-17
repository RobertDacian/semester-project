import { getListing } from "../api/listings/read.js";
import { updateListing } from "../api/listings/index.js";
import { formatForDatePicker } from "../utils/formatters.js";

/**
 * Function that updates new listing
 *
 */

export async function setUpdateListingListener() {
  const form = document.querySelector("#editListingProfile1");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const update = await getListing(id);
    form.id = update.id;
    form.title.value = update.title;
    form.description.value = update.description;
    form.tags.value = update.tags;
    form.media.value = update.media;
    form.endsAt.value = formatForDatePicker(update.endsAt);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const data = new FormData(form);
      // const id = data.get('id');
      const title = data.get("title");
      const description = data.get("description");
      const endsAt = data.get("endsAt");
      const media =
        data.get("media").trim().length > 0
          ? data.get("media").split(",")
          : null;
      const tags = data.get("tags").split(", ");

      const listingsData = { id, title, description, endsAt, media, tags };

      // console.log('listing', listingsData);

      await updateListing(listingsData);

      location.href = "/profile/listings";
    });
  }
}
