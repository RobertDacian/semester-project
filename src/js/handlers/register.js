import { register } from "../api/auth/register.js";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile);
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
