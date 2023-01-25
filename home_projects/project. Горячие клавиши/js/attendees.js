/* attendees.js */
const fab = document.querySelector("#fab");
const attendee = document.querySelector("#attendee-name");
const modal = document.querySelector("#modal");
const form = document.querySelector("#attendee-form");
const list = document.querySelector("#list");

// this function is exported
export const toggleModal = () => {
  modal.classList.toggle("show");
  fab.classList.toggle("rotate");
  if (modal.classList.contains("show")) {
    attendee.focus();
  } else {
    attendee.blur();
  }
};

// this function is exported and called in index.js
export const init = () => {
  fab.addEventListener("click", toggleModal);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    toggleModal();
    attendee.blur();
    list.insertAdjacentHTML(
      "afterbegin",
      `<li tabindex="0" class="deletable">${attendee.value}</li>`
    );
    attendee.value = "";
  });
};


// Перед вами приложение для посетителей, в котором пользователь может добавить участника, нажав на иконку `+`. Откроется модальное окно, в котором пользователь может ввести имя участника.

// Необходимо добавить в этот проект сочетания клавиш, с помощью которых пользователь сможет автоматически открывать модальное окно при нажатии символа `n`  (в любом месте страницы, если модальное окно еще не открыто). Если модальное окно уже открыто, пользователь должен иметь возможность закрыть его с помощью клавиши `Esc`.

// Также есть функция `toggleModal`, которая экспортируется в файл `attendees.js`. Необходимо понять, что она делает.
  

