import { getListings } from "../../api/listings/read.js";
// import { searchListings } from '../../api/listings/read.js';

export async function renderAuctionListHome() {
  const auctionsHome = await getListings();
  renderAuctionsHome(auctionsHome);
}

export function renderSearchedAuctionListHome(auctionsHome) {
  renderAuctionsHome(auctionsHome);

  const msgContainerHome = document.querySelector(".msg-container");
  msgContainerHome.innerHTML = "";

  if (auctionsHome.length < 1) {
    msgContainerHome.innerHTML += `<p class="error-msg">Sorry, no listing matched your search. Please search for a specific tag, for ex: Cars, Audi, etc.</p>`;
    return;
  }
}

function renderAuctionsHome(auctionsHome) {
  const listingsContainer = document.querySelector("#cardWrapper1");
  
  if (!listingsContainer) {
    return;
  }

  listingsContainer.innerHTML = "";

  auctionsHome.forEach((auction) => {
    listingsContainer.innerHTML += ` 
                <div id"cardWrapper1" class=" card  mb-4 rounded">
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
                      <div class="input-group flex-row gap-2">
                        <input type="number" class="form-control rounded" placeholder="Place your bid" />
                        <button class="btn btn-outline-primary rounded btn-sm w-25">
                        Bid
                        </button>
                      </div>
                      <div class="mt-4">
                        <h3 class="text-success">Latest bid $200 By Some User</h3>
                      </div>       
                    </div>
                  </div> 
                </div`;
  });
}
