// import { API_AUCTION_URL } from "../constants.js";
// import { authFetch } from "../authFetch.js";

// const action = "/listings";

// export async function getListings() {
//   const getPostURL = `${API_AUCTION_URL}${action}`;

//   const response = await authFetch(getPostURL);

//   return await response.json();
// }

// export async function getListing(id) {
//   if (!id) {
//     throw new Error("Get requires a listingID");
//   }

//   const getPostURL = `${API_AUCTION_URL}${action}/${id}`;

//   const response = await authFetch(getPostURL);

//   return await response.json();
// }

//  ======== GET SINGLE LISTING ========
// export async function getListing(id) {
// 	if (!id) {
// 		throw new Error('Get requires a listingID');
// 	}

// 	const getSingleListingURL = `${API_AUCTION_URL}${action}/${id}`;

// 	const response = await authFetch(getSingleListingURL);

// 	return await response.json();
// }

// import { API_AUCTION_URL } from "../constants.js";
// import { authFetch } from "../authFetch.js";
// import { message } from "../../components/messages.js";

// const action = "/listings";
// const method = "get";

// export async function getListingsAll(listingsData) {
//   const listingsContainer = document.querySelector("#cardWrapper1");

//   try {
//     const allListingUrl = `${API_AUCTION_URL}${action}`;

//     const response = await authFetch(allListingUrl, {
//       method,
//       body: JSON.stringify(listingsData),
//     });
//     // displayListings(listings);
//     const data = await response.json();

//     console.log("data", data);

//     listingsContainer.innerHTML = "";
//     for (let i = 0; i < data.length; i++) {
//       listingsContainer.innerHTML += `
//                 <div id"cardWrapper" class=" card  mb-4 rounded">
//                   <div class="card-header">
//                     <div class="col-auto d-flex align-items-center gap-2 mb-3">
//                       <img src="${data[i].media}" class="rounded-circle avatar-sm" alt="" />
//                       <h4 class="mb-0">Tagged - ${data[i].tags}</h4>
//                     </div>
//                     <h2 class="mb-2">
//                       ${data[i].title}
//                     </h2>
//                   </div>

//                   <div class="card-body mt-0 d-flex flex-lg-row flex-column">
//                     <div class="w-50">
//                       <img class="w-100" src="${data[i].media}" alt="" />
//                     </div>
//                     <div>
//                       <p class="ms-lg-4 mt-lg-0 mt-3 ms-0 card-text">
//                         ${data[i].description}
//                       </p>
//                     </div>
//                   </div>

//                   <div class="card-footer">
//                     <div class="d-flex flex-column mt-2 mb-2 w-100">
//                       <h4 class="mb-2">
//                         Bid started:
//                         <span class="text-success border-bottom border-success">${data[i].created}</span>
//                       </h4>
//                       <h4 class="mb-0">
//                         Bid ends in:
//                         <span class="text-danger border-bottom border-danger">${data[i].endsAt}</span>
//                       </h4>

//                       <h3>
//                         To bid on this product please
//                         <a href="./profile/sign-in/"><span>Sign-In.</span></a>
//                       </h3>
//                     </div>
//                   </div>
//                 </div`;
//     }
//   } catch (error) {
//     console.log(error);
//     listingsContainer.innerHTML = message("error", "An error occurred.", error);
//   }
// }

// getListingsAll();

//////////////////////////////////////////////////////////////////////////////
////////////////// SETTING UP THE SEARCH INPUT FILTER/////////////////////////
//////////////////////////////////////////////////////////////////////////////
// const form = document.querySelector('.search-form');
// const searchInput = document.querySelector('#searchListings1');

// if (form) {
// form.addEventListener('keyup', () => {
// 	const inputValue = searchInput.value.toLowerCase();
// 	console.log(inputValue);

// 	const filteredProducts = listings.filter(list => {
// 		return list.name.toLowerCase().includes(inputValue);
// 	});
// 	displayListings(filteredProducts);
// });
// }

// //  ======== GET ALL LISTINGS WITH FOREACH LOOP========
// import { API_AUCTION_URL } from '../constants.js';
// import { authFetch } from '../authFetch.js';
// import { message } from '../../components/messages.js';

// const listingsContainer = document.querySelector('#cardWrapper');
// const msgContainer = document.querySelector('.msg-container');

// let listings = [];
// // let filteredProducts = [];
// const action = '/listings';
// const method = 'GET';

// export async function getListings(listingsData) {
// 	try {
// 		const createListingURL = `${API_AUCTION_URL}${action}`;

// 		const response = await authFetch(createListingURL, {
// 			method,
// 			body: JSON.stringify(listingsData),
// 		});

// 		displayListings(listings);
// 		// displayListings(filteredProducts);

// 		return await response.json();
// 	} catch (error) {
// 		console.log(error);
// 		listingsContainer.innerHTML = message('error', 'An error occurred.', error);
// 	}
// }

// getListings();

// export const displayListings = productsToDisplay => {
// 	if (productsToDisplay.length < 1) {
// 		msgContainer.innerHTML = `<div class="msg-container">
//                                   <p class="error-msg" id="errorMsg">Sorry, no listing matched your search</p>
//                                   </div>`;
// 		return;
// 	}

// 	listingsContainer.innerHTML = '';

// 	productsToDisplay.forEach(function (listing) {
// 		listingsContainer.innerHTML += `
//               <div id"cardWrapper" class=" card  mb-4 rounded">
//                 <div class="card-header">
//                   <div class="col-auto d-flex align-items-center gap-2 mb-3">
//                     <img src="${listing.media}" class="rounded-circle avatar-sm" alt="" />
//                     <h4 class="mb-0">Tagged - ${listing.tags}</h4>
//                   </div>
//                   <h2 class="mb-2">
//                     ${listing[0].title}
//                   </h2>
//                 </div>

//                 <div class="card-body mt-0 d-flex flex-lg-row flex-column">
//                   <div class="w-50">
//                     <img class="w-100" src="${listing.media}" alt="" />
//                   </div>
//                   <div>
//                     <p class="ms-lg-4 mt-lg-0 mt-3 ms-0 card-text">
//                       ${listing.description}
//                     </p>
//                   </div>
//                 </div>

//                 <div class="card-footer">
//                   <div class="d-flex flex-column mt-2 mb-2 w-100">
//                     <h4 class="mb-2">
//                       Bid started:
//                       <span class="text-success border-bottom border-success">${listing.created}</span>
//                     </h4>
//                     <h4 class="mb-0">
//                       Bid ends in:
//                       <span class="text-danger border-bottom border-danger">${listing.endsAt}</span>
//                     </h4>

//                     <h3>
//                       To bid on this product please
//                       <a href="./profile/sign-in/"><span>Sign-In.</span></a>
//                     </h3>
//                   </div>
//                 </div>
//               </div`;
// 	});
// 	// displayButtons(productsToDisplay);
// };

// //////////////////////////////////////////////////////////////////////////////
// ////////////////// SETTING UP THE SEARCH INPUT FILTER/////////////////////////
// //////////////////////////////////////////////////////////////////////////////
// const form = document.querySelector('.search-form');
// const searchInput = document.querySelector('#searchListings1');

// if (form) {
// form.addEventListener('keyup', () => {
// 	const inputValue = searchInput.value.toLowerCase();
// 	console.log(inputValue);

// 	const filteredProducts = listings.filter(list => {
// 		return list.name.toLowerCase().includes(inputValue);
// 	});
// 	displayListings(filteredProducts);
// });
// }

// const action = '/listings';

// async function getAllListings() {
//   try {
//     const getAllListingsURL = `${API_AUCTION_URL}${action}`;
// 		const response = await authFetch(getAllListingsURL);
// 		const data = await response.json();
// 		console.log(data);

// 		for (let i = 0; i < data.length; i++) {
// 			console.log(data[i].id);
// 			console.log(data[i].title);
// 			console.log(data[i].description);

// 			listingsContainer.innerHTML += `<!-- Card Header -->
//                                       <div class="card-header">
//                                         <div class="col-auto d-flex align-items-center gap-2 mb-3">
//                                           <img
//                                             src="./assets/avatars/img_me.jpg"
//                                             class="rounded-circle avatar-sm"
//                                             alt=""
//                                           />
//                                           <h4 class="mb-0">Listed By - Robert D.B Robert D.B</h4>
//                                         </div>
//                                         <h2 class="mb-2">
//                                           ${data[i].title}
//                                         </h2>
//                                       </div>
//                                       <!-- Card Body -->
//                                       <div class="card-body mt-0 d-flex flex-lg-row flex-column">
//                                         <div class="w-100">
//                                           <img
//                                             class="w-100"
//                                             src="./assets/images/portfolio-square-2.jpg"
//                                             alt=""
//                                           />
//                                         </div>
//                                         <div>
//                                           <p ${data[i].description}</p>
//                                         </div>
//                                       </div>
//                                       <!-- Card Footer -->
//                                       <div class="card-footer">
//                                         <div class="d-flex flex-column mt-2 mb-2 w-100">
//                                           <h4 class="mb-2">
//                                             Bid started:
//                                             <span class="text-success border-bottom border-success"
//                                               >23 November 29, 2022</span
//                                             >
//                                           </h4>
//                                           <h4 class="mb-0">
//                                             Bid ends in:
//                                             <span class="text-danger border-bottom border-danger"
//                                               >23 Days - 03 Hours - 34 Min - 23 Sec</span
//                                             >
//                                           </h4>
//                                         </div>
//                                         <div class="mt-4 mb-2">
//                                           <h3>
//                                             To bid on this product please
//                                             <a href="./profile/sign-in/"><span>Sign-In.</span></a>
//                                           </h3>
//                                         </div>
//                                       </div>

//                                             `;

// 			// listingContainer.innerHTML += `
// 			//                                 <a href="product.html?id=${data[i].id}" class="listings__item item-container d-flex justify-content-center">
// 			//                                     <h3>${data[i].title}</h3>
// 			//                                 </a>
// 			//                                 `
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// getAllListings();

// export async function getSuggested(url, opt, value) {
// 	const data = await getListings(url, opt);

// 	const filtered = data.filter(listing => {
// 		let desc;
// 		if (listing.description) {
// 			desc = listing.description.toLowerCase().includes(value.toLowerCase());
// 		}
// 		return (
// 			listing.seller.name.toLowerCase().includes(value.toLowerCase()) ||
// 			listing.title.toLowerCase().includes(value.toLowerCase()) ||
// 			desc
// 		);
// 	});
// 	return filtered;
// }

// import { API_AUCTION_URL } from '../constants.js';

// export async function getListingsHome() {
// 	const response = await fetch(`${API_AUCTION_URL}/listings`);
// 	if (response.ok) {
// 		return await response.json();
// 	}

// 	throw new Error(response.statusText);
// }

// export async function searchListings(searchTerm) {
// 	const response = await fetch(
// 		`${API_AUCTION_URL}/listings?_tag=${searchTerm}`
// 	);
// 	if (response.ok) {
// 		return await response.json();
// 	}

// 	throw new Error(response.statusText);
// }
