const button = document.querySelector("button");
const close = document.querySelector(".popup-close");
const container = document.querySelector(".popup-container");

button.addEventListener("click", () => {
  container.classList.remove("hidden");
  container.classList.add("flex")
});

close.addEventListener("click", () => {
  container.classList.add("hidden");
});

container.addEventListener("click", (event) => {
  if (event.target.className.includes("popup-container")) {
    container.classList.add("hidden");
  }
});
