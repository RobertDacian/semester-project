import * as storage from "./index.js";

export function getProfileName() {
  const profile = storage.load("profile");
  return profile?.name;
}

export function getAvatar() {
  const media = storage.load("avatar");
  return media?.avatar;
}
