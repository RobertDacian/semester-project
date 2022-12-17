import { getProfile, updateAvatar } from "../api/profile/index.js";

/**
 * Function that updates Profile
 *
 */

export async function setUpdateAvatarListener() {
  const form = document.querySelector("#editAvatar");

  if (form) {
    const update = await getProfile();
    form.avatar.value = update.avatar;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      // form.reset();
      const form = event.target;
      const data = new FormData(form);
      const avatarData = Object.fromEntries(data.entries());
      const avatar = data.get("avatar");

      console.log(avatar);

      await updateAvatar(avatarData);

      location.href = "../../profile/my-profile";
    });
  }
}
