// export function message(messageType = "success", message = "") {
//   return `<div class=" alert ${messageType}">${message}</div>`;
// }

export function displayError(message = "Unknown error") {
  return `<div class="error">${message}</div>`;
}

// displayError();

export function createMessage(type = "success", message = "No message") {
  const html = `<div class="message ${type}">${message}</div>`;

  return html;
}

// createMessage();
