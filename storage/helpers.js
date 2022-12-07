import * as storage from './index.js';

export function getProfileName() {
  const profile = storage.load('profile');
  return profile?.name;
}
