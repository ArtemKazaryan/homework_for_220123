/* index.js */
// my code
import {getTranslation} from "./helpers.js";

let outputText = document.querySelector("#output-text");

let select = document.querySelector("#languages-list");

select.addEventListener("change", (event) => {
  outputText.textContent = getTranslation(event.currentTarget.value)

  });

// В файл index.js импортируйте функцию getTranslation для возврата корректного перевода выбранного пользователем. Элемент #output-text должен отображать правильный перевод, когда пользователь выбирает язык из раскрывающегося списка.