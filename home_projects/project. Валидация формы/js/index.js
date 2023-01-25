// /* index.js */
// my code

userName = document.querySelector("#user-name");
userName.addEventListener("focus", () => {
  console.log("userName: focus inside (cursor in)")
  userName.classList.remove("success")
  userName.classList.remove("error")
});

userName.addEventListener("blur", () => {
  console.log("userName: blur (cursor out)")
  if (userName.value.length >= 6) {
    userName.classList.add("success")
  }
});

userName.addEventListener("blur", () => {
  console.log("userName: blur (cursor out)")
  if (userName.value.length < 6) {
    userName.classList.add("error")
  }
});


//   Поле `#user-name` должно проверяться в момент выхода пользователя из текстового поля с помощью табуляции (или перемещение курсора за его пределы).

// Если пользователь вводит шесть символов или более, вы должны добавить к нему класс `success`. Данный класс добавляет зеленую рамку, если поле валидно. Если пользователь пишет менее шести символов, добавляется класс `error`. Данный класс добавляет красную рамку.
  

