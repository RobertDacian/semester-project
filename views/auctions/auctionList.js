import { getListings, getOwnListings } from '../../api/listings/read.js';
// import { message } from "../../components/messages.js";

export async function renderAuctionList() {
  const auctions = await getListings();
  renderAuctions(auctions);
}

export function renderSearchedAuctionList(auctions) {
  renderAuctions(auctions);

  const msgContainer = document.querySelector(".msg-container");
  msgContainer.innerHTML = "";

  if (auctions.length < 1) {
    msgContainer.innerHTML += `<p class="error-msg">Sorry, no listing matched your search. Please search for a specific tag, for ex: Cars, Audi, etc.</p>`;
    return;
  }
}

export async function renderOwnListings() {
  const auctions = await getOwnListings();
  renderOwnAuctions(auctions);
}


function renderOwnAuctions(auctions) {
  const listingsContainer = document.querySelector('#ownListings');
  listingsContainer.innerHTML = '';

  auctions.forEach((auction) => {
    listingsContainer.innerHTML += `<div>${auction.title}<a href="/listing/edit/${auction.id}">Edit</a></div>`;
  })

}


function renderAuctions(auctions) {
  const listingsContainer = document.querySelector("#cardWrapper");

  listingsContainer.innerHTML = "";

  auctions.forEach((auction) => {
    listingsContainer.innerHTML += ` 
                <div id"cardWrapper" class=" card  mb-4 rounded">
                  <div class="card-header">
                    <div class="col-auto d-flex align-items-center gap-2 mb-3">
                      <img src="${auction.media}" class="rounded-circle avatar-sm" alt="" />
                      <h4 class="mb-0">Tagged - ${auction.tags}</h4>
                    </div>
                    <h2 class="mb-2">
                      ${auction.title}
                    </h2>
                  </div>
              
                  <div class="card-body mt-0 d-flex flex-lg-row flex-column">
                    <div class="w-50">
                      <img class="w-100" src="${auction.media}" alt="" />
                    </div>
                    <div>
                      <p class="ms-lg-4 mt-lg-0 mt-3 ms-0 card-text">
                        ${auction.description}
                      </p>
                    </div>
                  </div>
      
                  <div class="card-footer">
                    <div class="d-flex flex-column mt-2 mb-2 w-100">
                      <h4 class="mb-2">
                        Bid started:
                        <span class="text-success border-bottom border-success">${auction.created}</span>
                      </h4>
                      <h4 class="mb-0">
                        Bid ends in:
                        <span class="text-danger border-bottom border-danger">${auction.endsAt}</span>
                      </h4>
                  
                      <h3>
                        To bid on this product please
                        <a href="./profile/sign-in/"><span>Sign-In.</span></a>
                      </h3>
                    </div>
                  </div> 
                </div`;
  });
}
