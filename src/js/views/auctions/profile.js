// ========== Imports ==========

import { getProfile } from "../../api/profile/index.js";
// import { getAvatar } from "../../api/profile/read.js";
import { load } from "../../storage/index.js";
import { getProfileName, getProfileAvatar } from "../../storage/helpers.js";

// =========== Rendering my profile ============

export async function renderProfile() {
  const profile = await getProfile();
  myProfile(profile);
}

function myProfile() {
  const profilesContainer = document.querySelector(
    "#profileContainer, #profileContainer1"
  );

  // const profile = JSON.parse(localStorage.getItem("profile"));

  const data = load("profile");
  const name = getProfileName();
  const avatar = getProfileAvatar();
  // const avatar = load('avatar');
  const credits = load("credits");

  console.log(avatar);

  profilesContainer.innerHTML = "";

  if (data) {
    profilesContainer.innerHTML = `<div class="d-flex align-items-center bg-white px-2 py-2 ">
                <div id="avatarImg1" class="me-2">
                  <img src="${avatar}" class="avatar-lg rounded-circle" alt="" />
                </div>
                <div class="d-flex flex-column pt-4">
                  <h2 class="mb-0">${name}</h2>
                  <p>Credits: ${credits}</p>
                </div>
              </div>`;
  }
}

// =========== Rendering my avatar ============

// export async function renderAvatar() {
//   const avatar = await getAvatar();
//   myAvatar(avatar);
// }

// function myAvatar() {
//   const avatarContainer = document.querySelector("#avatarImg, #avatarImg1");

//   const media = load("avatar");
//   //  const media = getProfileAvatar('avatar');

//   if (media) {
//     avatarContainer.innerHTML = `<div class="d-flex align-items-center">
//                 <div id="avatarImg1" class="me-2">
//                   <img src="${media}" class="avatar-lg rounded-circle" alt="" />
//                 </div>
//               </div>`;
//   }
// }
