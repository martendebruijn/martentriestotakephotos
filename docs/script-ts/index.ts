/** Allow CSS transitions after page load. Removes `.no-transitions` from body. */
const transitionAfterPageLoad = (): void =>
  document.body.classList.remove("no-transitions");

transitionAfterPageLoad();
