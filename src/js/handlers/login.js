import { login } from "../api/auth/login.js";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile);
      location.href = `/?view=auction-house`;
    });
  }
}

// const username = form.username.value;
// const email = form.email.value;
// const password = form.password.value;
// const avatar = form.avatar.value;

// const profile = {
// 	username,
// 	email,
// 	password,
// 	avatar,
// };
