import { init, toggleModal } from "./attendees.js";

// this function adds an event listener on the + button which then opens the modal
// эта функция добавляет прослушиватель событий на кнопку +, которая затем открывает модальный

init();

const modal = document.querySelector("#modal");

document.addEventListener("keyup", event => {
  const key = event.key;
  if (key === "n" && !modal.classList.contains("show")) {
    toggleModal();
  }
  if (key === "Escape" && modal.classList.contains("show")) {
    toggleModal();
  }
});
