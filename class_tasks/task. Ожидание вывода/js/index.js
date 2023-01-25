/* index.js */
import {wait} from "./helpers.js";

const init = () => {
  console.log("Program started");
  wait(3000);
  console.log("Waited 3 second");
}


// Sample usage (do not modify)
init();


// В index.js добавлены две функции вывода. Исправьте код в функции init, чтобы строка "Waited 3 second" была показана спустя три секунды после выполнения функции wait().