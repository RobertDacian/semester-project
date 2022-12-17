import * as storage from "./index.js";

export function getProfileName() {
  const profile = storage.load("profile");
  return profile?.name;
}

// export function getProfileAvatar() {
//   const avatar = storage.load("avatar");
//   return avatar?.avatar;
// }

export function saveProfileDetails(profile, avatar, credits) {
  storage.save("profile", profile);
  storage.save("avatar", avatar);
  storage.save("credits", credits);
}
