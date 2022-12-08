import * as storage from "./index.js";

export function getProfileName() {
  const profile = storage.load("profile");
  return profile?.name;
}

export function getProfileAvatar() {
  const profile = storage.load("avatar");
  return profile?.avatar;
}

export function getProfileCredits() {
  const profile = storage.load("credits");
  return profile?.credits;
}
