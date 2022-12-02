import { remove } from "../../storage/index.js";

export function signOutBtn() {
  const signOut = document.querySelector("#signOutBtn");
  if (signOutBtn) {
    signOut.addEventListener("click", () => {
      remove("Token", "Profile", "credits");
    });
  }
}
