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

      console.log("listing", listing)

      // const [title, body, tags, media, endsAt] = event.target;

      // const [title, body, tags, media, endsAt] = {
      // 	title: title.value,
      // 	description: body.value,
      // 	tags: [tags.value],
      // 	media: [media.value],
      // 	endsAt: endsAt.value,
      // };

      // await createListing(listing);
      // console.log(listing);
      // location.reload();
    });
  }
}

// import { createListing } from '../api/listings/create.js';

/**
 * Function that creates new listing
 *
 */

//  const form = document.querySelector('#createListingHome');
//  let date = document.querySelector('#date-picker');

// export function setCreateListingListenerHome() {

// if (form) {
// 	form.addEventListener('submit', event => {
//     event.preventDefault();
//     form.reset();

// 			// const form = event.target;
// 			// const formObject = new FormData(form);
// 			// const listingData = Object.fromEntries(formObject.entries());
// 			// console.log(listingData);
// 			// const { title, description, tags, media, endsAt } = listingData;

// 			const [title, description, tags, media, endsAt] = event.target;
// 			const date = new Date(endsAt.value).toISOString();
// 			console.log(date);

// 			let listingData = {
// 				title: title.value,
// 				description: description.value,
// 				tags: [tags.value],
// 				media: [media.value],
//         endsAt: date,
// 			};
//       console.log(listingData);

// 			// Delete the media if empty
// 			if (listingData.media === '' || listingData.media === []) {
// 				delete listingData.media;
//       // } else {
//       //   return
//       }
//       // createListing(title, description, [media], [tags], date, endsAt);
//       createListing(listingData);
//       // location.reload();

// 		});

//   }

// }
