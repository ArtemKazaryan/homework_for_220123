const button = document.querySelector("#my-button");

const listener = function (event) {
  console.log(button.textContent);
}
button.addEventListener("click", listener);

setTimeout(() => {
  // TODO: remove the event listener from above
  button.removeEventListener("click",listener);
  console.log("event listener removed")
}, 5000);

// Завершите выполнение кода, чтобы прослушиватель событий click удалялся через 1.5 секунды.