/* helpers.js */
import translations from "./translations.js";


/**
 * @param {string} language
 */
export const getTranslation = (language) => {
  console.log(translations.welcome[language] ?? "Welcome")
  return translations.welcome[language] ?? "Welcome";
};

// В файл index.js импортируйте функцию getTranslation для возврата корректного перевода выбранного пользователем. Элемент #output-text должен отображать правильный перевод, когда пользователь выбирает язык из раскрывающегося списка.