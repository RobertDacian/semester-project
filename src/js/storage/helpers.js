import * as storage from "./index.js";

export function getProfileName() {
  const profile = storage.load("profile");
  return profile?.name;
}

export function getProfileAvatar() {
  const media = storage.load("avatar");
  return media?.avatar;
}
