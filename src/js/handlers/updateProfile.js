import { getProfile, updateAvatar } from "../api/profile/index.js";
import { saveProfileDetails } from "../storage/helpers.js";
import { renderProfile } from "../views/auctions/profile/profile.js";

export async function setUpdateAvatarListener() {
  const form = document.querySelector("#editAvatar");

  if (form) {
    const update = await getProfile();
    form.avatar.value = update.avatar;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const avatarData = Object.fromEntries(data.entries());

      try {
        const response = await updateAvatar(avatarData);

        const { name, email, avatar, credits } = response;
        saveProfileDetails({ name, email }, avatar, credits);
        renderProfile();
      } catch (error) {
        // display error
      }

      location.href = "../../profile/my-profile";
    });
  }
}
