// my code
const form = document.querySelector("#login-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("form submitted");
	// event callback (when the form is submitted)
});

// Добавьте обработчик события на форму. Также необходимо прервать перезагрузку страницы после отправки данных.