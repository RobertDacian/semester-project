// ========== Imports ==========

import { getProfile } from "../../api/listings/read.js";
import { getAvatar } from "../../api/listings/read.js";
import { load } from "../../storage/index.js";

// =========== Rendering my profile ============

export async function renderProfile() {
  const profile = await getProfile();
  myProfile(profile);
}

function myProfile() {
  const profilesContainer = document.querySelector(
    "#profileContainer, #profileContainer1"
  );

  const profile = JSON.parse(localStorage.getItem("profile"));

  const { name } = load("profile");
  const media = load("avatar");
  const credits = load("credits");

  // console.log(profile);

  profilesContainer.innerHTML = "";

  if (profile) {
    profilesContainer.innerHTML = `<div class="d-flex align-items-center">
                <div id="avatarImg1" class="me-2">
                  <img src="${media}" class="avatar-lg rounded-circle" alt="" />
                </div>
                <div class="d-block">
                  <h2 class="mb-0">${name}</h2>
                  <p>Credits: ${credits}</p>
                </div>
              </div>`;
  }
}

// =========== Rendering my avatar ============

export async function renderAvatar() {
  const avatar = await getAvatar();
  myAvatar(avatar);
}

function myAvatar() {
  const avatarContainer = document.querySelector("#avatarImg, #avatarImg1");

  const media = load("avatar");

  if (media) {
    avatarContainer.innerHTML = `<div class="d-flex align-items-center">
                <div id="avatarImg1" class="me-2">
                  <img src="${media}" class="avatar-lg rounded-circle" alt="" />
                </div>
              </div>`;
  }
}
