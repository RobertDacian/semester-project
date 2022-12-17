// ========== Imports ==========
import { load } from "../../../storage/index.js";

// =========== Rendering my profile ============

export function renderProfile() {
  const profilesContainer = document.querySelector(
    "#profileContainer, #profileContainer1, .profileContainer2"
  );

  // const data = load('profile');
  const { name } = load("profile");
  const avatar = load("avatar");
  const credits = load("credits");

  profilesContainer.innerHTML = `<div class="d-flex align-items-center bg-white px-2 py-2 ">
              <div id="avatarImg" class="me-2">
                <img src="${avatar}" class="avatar-lg rounded-circle" alt="" />
              </div>
              <div class="d-flex flex-column pt-4">
                <h2 class="mb-0">${name}</h2>
                <p>Credits: ${credits}</p>
              </div>
            </div>`;
}
