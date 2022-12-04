//  ======== GET ALL LISTINGS ========

//  ======== GET ALL LISTINGS WITH FOR LOOP ========

// import { API_AUCTION_URL } from "../constants.js";
// import { authFetch } from "../authFetch.js";
// import { message } from "../../components/messages.js";

// const listingsContainer = document.querySelector("#cardWrapper1");

// const action = "/listings";
// const method = "get";

// export async function getListingsAll(listingsData) {
//   try {
//     const allListingUrl = `${API_AUCTION_URL}${action}`;

//     const response = await authFetch(allListingUrl, {
//       method,
//       body: JSON.stringify(listingsData),
//     });
//     const data = await response.json();

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
