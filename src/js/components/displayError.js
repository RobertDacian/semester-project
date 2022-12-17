export default function displayError(container, message) {
  const errorContainer = document.querySelector(container);

  if (!errorContainer) {
    throw new Error("Error container not found");
  }
  const div = document.createElement("div");
  div.classList.add("error");
  const text = document.createTextNode(message);
  div.appendChild(text);
  errorContainer.prepend(div);
}
