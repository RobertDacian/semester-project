import * as listeners from "./handlers/index.js";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/sign-in/":
      listeners.setLoginFormListener();
      return;
    case "./profile/sign-up/":
      listeners.setRegisterFormListener();
      return;
    // case '/post/create/':
    // 	listeners.setCreatePostFormListener();
    // 	return;
    // case '/post/edit/':
    // 	listeners.setUpdatePostListener();
    // 	return;
    // case '/profile/edit/':
    // 	listeners.setUpdateProfileListener();
    // 	return;
  }
}

console.log(location.pathname);
