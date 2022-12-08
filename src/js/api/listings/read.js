// ========== Imports ==========

import { API_AUCTION_URL } from "../constants.js";
import { authFetch } from "../authFetch.js";
import { getProfileName } from "../../storage/helpers.js";
import { getProfileAvatar } from "../../storage/helpers.js";
import { getProfileCredits } from "../../storage/helpers.js";

//========== This template module gets all the listings from the the API. ==========

const action = "/listings";

export async function getListings() {
  const url = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(url);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

// ========== This template module is tag based search functionality for all the listings ==========

export async function searchListings(searchTerm) {
  const url = `${API_AUCTION_URL}${action}?_tag=${searchTerm}`;

  const response = await authFetch(url);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

//========== This template module gets my own listings from the the API. ==========

export async function getOwnListings() {
  const name = getProfileName();

  if (!name) {
    return [];
  }

  const url = `${API_AUCTION_URL}/profiles/${name}${action}`;

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

//========== This template module gets my own profile from the the API. ==========

export async function getProfile() {
  const name = getProfileName();

  if (!name) {
    return [];
  }

  const url = `${API_AUCTION_URL}/profiles/${name}`;

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

//========== This template module gets my own avatar from the the API. ==========

export async function getAvatar() {
  const name = getProfileName();
  const media = getProfileAvatar();

  if (!name) {
    return [];
  }

  if (!media) {
    return [];
  }

  const url = `${API_AUCTION_URL}/profiles/${name}${media}`;

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

//========== This template module gets my listing credits from the the API. ==========

export async function getCredits() {
  const name = getProfileName();
  const media = getProfileAvatar();
  const credits = getProfileCredits();

  if (!name) {
    return [];
  }

  if (!media) {
    return [];
  }

  const url = `${API_AUCTION_URL}/profiles/${name}${credits}`;

  const response = await authFetch(url);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
